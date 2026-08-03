// Main Compiler pipeline and Public API for Unores-X v2
(function (UnoresX) {
  'use strict';

  var propertyCache = Object.create(null);
  var compileCache = Object.create(null);
  var ruleCache = Object.create(null);

  UnoresX.clearCache = function () {
    propertyCache = Object.create(null);
    compileCache = Object.create(null);
    ruleCache = Object.create(null);
  };

  function compileClass(className) {
    if (!className || typeof className !== 'string') return null;

    if (compileCache[className] !== undefined) {
      return compileCache[className];
    }

    // 1. Check legacy compatibility layer first
    var legacyCompat = UnoresX.resolveLegacyCompatibility(className);
    if (legacyCompat) {
      var tokens = UnoresX.tokenize(className);
      if (tokens) {
        var resolved = {
          rules: legacyCompat.rules,
          selector: '',
          mediaQuery: null
        };

        var escaped = tokens.className
          .replace(/\[/g, '\\[').replace(/\]/g, '\\]')
          .replace(/#/g, '\\#').replace(/%/g, '\\%')
          .replace(/\./g, '\\.').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
          .replace(/"/g, '\\"')
          .replace(/\//g, '\\/');
        var selector = '.' + escaped;

        if (tokens.state) {
          selector += ':' + UnoresX.STATES[tokens.state];
        }
        if (tokens.theme) {
          selector = UnoresX.THEMES[tokens.theme] + ' ' + selector;
        }
        resolved.selector = selector;

        if (tokens.breakpoint) {
          var bpName = tokens.breakpoint;
          if (bpName.startsWith('max-')) {
            var actualBp = bpName.substring(4);
            resolved.mediaQuery = '(max-width:' + UnoresX.BREAKPOINTS[actualBp] + 'px)';
          } else {
            resolved.mediaQuery = '(min-width:' + UnoresX.BREAKPOINTS[bpName] + 'px)';
          }
        }

        var cssResult = UnoresX.emit(resolved);
        compileCache[className] = cssResult;
        return cssResult;
      }
    }

    // 2. Tokenize class
    var tokens = UnoresX.tokenize(className);
    if (!tokens) {
      compileCache[className] = null;
      return null;
    }

    // 3. Resolve using Grammar and Dictionaries
    var resolved = UnoresX.resolveClass(tokens);
    if (!resolved) {
      compileCache[className] = null;
      return null;
    }

    // 4. Emit CSS
    var cssResult = UnoresX.emit(resolved);
    compileCache[className] = cssResult;
    return cssResult;
  }

  UnoresX.compile = compileClass;

})(UnoresX);
