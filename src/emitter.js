// CSS Emitter for Unores-X v2
(function (UnoresX) {
  'use strict';

  function emit(resolved) {
    if (!resolved || !resolved.rules || resolved.rules.length === 0) return null;

    var cssRuleStr = '';
    if (resolved.rules.length === 1 && resolved.rules[0].startsWith('::')) {
      cssRuleStr = resolved.selector + resolved.rules[0];
    } else {
      cssRuleStr = resolved.selector + '{' + resolved.rules.join(';') + '}';
    }

    if (resolved.mediaQuery) {
      cssRuleStr = '@media ' + resolved.mediaQuery + '{' + cssRuleStr + '}';
    }

    return cssRuleStr;
  }

  UnoresX.emit = emit;
})(UnoresX);
