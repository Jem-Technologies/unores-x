// Runtime DOM Scanner, MutationObserver & loader gate integration
(function (UnoresX) {
  'use strict';

  var compiled = Object.create(null);
  var styleEl = null;
  var sheet = null;
  var fallback = false;
  var cssText = '';
  var ready = false;

  function ensureStyle() {
    if (styleEl && styleEl.isConnected) return styleEl;
    styleEl = document.getElementById('unores-x-runtime');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'unores-x-runtime';
      styleEl.setAttribute('data-unores-x', '');
    }
    (document.head || document.documentElement).appendChild(styleEl);
    sheet = styleEl.sheet;
    return styleEl;
  }

  function insertRule(rule) {
    if (fallback) {
      cssText += rule + '\n';
      styleEl.textContent = cssText;
      return;
    }
    try {
      sheet = styleEl.sheet;
      sheet.insertRule(rule, sheet.cssRules.length);
      cssText += rule + '\n';
    } catch (e) {
      fallback = true;
      cssText += rule + '\n';
      styleEl.textContent = cssText;
    }
  }

  function compileMany(names) {
    if (!names.length) return 0;
    ensureStyle();
    var n = 0;
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (compiled[name] !== undefined) continue;

      var css = UnoresX.compile(name);
      if (css) {
        insertRule(css);
        compiled[name] = true;
        n++;
      } else {
        // Cache invalid or non-unores class as checked to prevent re-processing
        compiled[name] = false;
      }
    }
    return n;
  }

  function collectFrom(el, out) {
    if (!el || el.nodeType !== 1) return;
    var cl = el.classList;
    if (!cl || !cl.length) return;
    for (var i = 0; i < cl.length; i++) {
      var c = cl[i];
      if (compiled[c] === undefined) {
        out.push(c);
      }
    }
  }

  function scanTree(root, out) {
    if (!root) return;
    if (root.nodeType === 1) collectFrom(root, out);
    var nodes = (root.querySelectorAll ? root.querySelectorAll('[class]') : null);
    if (nodes) {
      for (var i = 0; i < nodes.length; i++) {
        collectFrom(nodes[i], out);
      }
    }
  }

  var pending = [];
  var scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    var run = function () {
      scheduled = false;
      if (!pending.length) return;
      var batch = pending;
      pending = [];
      compileMany(batch);
    };
    (window.requestAnimationFrame || window.setTimeout)(run, 0);
  }

  function observe() {
    var mo = new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i++) {
        var rec = records[i];
        if (rec.type === 'attributes') {
          collectFrom(rec.target, pending);
        } else if (rec.type === 'childList') {
          var added = rec.addedNodes;
          for (var j = 0; j < added.length; j++) {
            scanTree(added[j], pending);
          }
        }
      }
      if (pending.length) schedule();
    });
    mo.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['class']
    });
  }

  function registerGate() {
    try {
      var g = window.__LoaderGate;
      if (g && g.required && typeof g.required.add === 'function') {
        g.required.add('unores');
      }
    } catch (e) { }
  }

  function markGate() {
    try {
      var g = window.__LoaderGate;
      if (g && typeof g.mark === 'function') {
        g.mark('unores');
        return;
      }
    } catch (e) { }
    try {
      (window.__preReady = window.__preReady || []).push('unores');
    } catch (e2) { }
  }

  function boot() {
    if (ready) return;
    ready = true;
    var out = [];
    try {
      scanTree(document.documentElement, out);
      compileMany(out);
      observe();
    } catch (e) {
      try {
        console.error('[unores-x] boot failed:', e);
      } catch (e2) { }
    } finally {
      markGate();
    }
  }

  UnoresX.add = function (names) {
    compileMany([].concat(names));
  };
  UnoresX.rescan = function () {
    var out = [];
    scanTree(document.documentElement, out);
    return compileMany(out);
  };
  UnoresX.dump = function () {
    return cssText;
  };
  Object.defineProperty(UnoresX, 'count', {
    get: function () {
      var validCount = 0;
      for (var k in compiled) {
        if (compiled[k] === true) validCount++;
      }
      return validCount;
    }
  });

  registerGate();

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', boot, { once: true });
    } else {
      boot();
    }
  }
})(UnoresX);
