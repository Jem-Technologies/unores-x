// Value Parser & Alias Expander for Unores-X v2
(function (UnoresX) {
  'use strict';

  var ALL_UNITS = [
    'px', 'rem', 'em', '%', 'vw', 'vh', 'svh', 'lvh', 'dvh', 'vmin', 'vmax',
    'fr', 'deg', 'rad', 'grad', 'turn', 's', 'ms', 'ch', 'ex', 'cm', 'mm', 'Q', 'in', 'pc', 'pt'
  ];

  function parseValue(valStr, metadata) {
    if (!valStr) return '';

    // If it is a CSS variable (--variable)
    if (valStr.startsWith('--')) {
      return 'var(' + valStr + ')';
    }

    // Hex Color detection: bg-f00, c-000, etc.
    if (metadata && metadata.css) {
      var isColorProp = false;
      var cssProps = Array.isArray(metadata.css) ? metadata.css : [metadata.css];
      for (var i = 0; i < cssProps.length; i++) {
        var cp = cssProps[i];
        if (cp.indexOf('color') !== -1 || cp.indexOf('background') !== -1 || cp.indexOf('border') !== -1 || cp.indexOf('outline') !== -1 || cp.indexOf('caret') !== -1 || cp.indexOf('accent') !== -1) {
          isColorProp = true;
          break;
        }
      }
      if (isColorProp && /^[0-9a-fA-F]{3,8}$/.test(valStr)) {
        var len = valStr.length;
        if (len === 3 || len === 4 || len === 6 || len === 8) {
          return '#' + valStr;
        }
      }
    }

    // Bracketed raw CSS: e.g. [rep(3,1fr)] or [10px_20px]
    if (valStr.startsWith('[') && valStr.endsWith(']')) {
      var inner = valStr.substring(1, valStr.length - 1);
      inner = inner.replace(/_/g, ' ');
      return expandAliases(inner);
    }

    // Keyword alias expansion anywhere outside bracketed strings
    if (UnoresX.KEYWORD_ALIASES[valStr] !== undefined) {
      return UnoresX.KEYWORD_ALIASES[valStr];
    }

    // Number with explicit supported unit, e.g. 50r -> 50rem, 10p -> 10%
    var compatUnitMatch = valStr.match(/^(-?(?:\d+(?:\.\d+)?|\.\d+))([a-zA-Z%]+)$/);
    if (compatUnitMatch) {
      var num = compatUnitMatch[1];
      var unitSuffix = compatUnitMatch[2];
      var finalUnit = unitSuffix;
      if (unitSuffix === 'p') finalUnit = '%';
      else if (unitSuffix === 'r') finalUnit = 'rem';
      else if (unitSuffix === 'e') finalUnit = 'em';
      else if (unitSuffix === 'v') finalUnit = 'vh';

      if (ALL_UNITS.indexOf(finalUnit) !== -1) {
        return num + finalUnit;
      }
    }

    // Pure decimals and integers
    if (/^-?(?:\d+(?:\.\d+)?|\.\d+)$/.test(valStr)) {
      var numVal = parseFloat(valStr);
      if (metadata && typeof metadata.normalize === 'function') {
        numVal = metadata.normalize(numVal);
      }
      var defaultUnit = (metadata && metadata.unit !== undefined) ? metadata.unit : '';
      return numVal + defaultUnit;
    }

    return valStr;
  }

  function expandAliases(str) {
    var result = '';
    var i = 0;
    while (i < str.length) {
      var char = str[i];

      if (/[a-zA-Z0-9_-]/.test(char)) {
        var start = i;
        while (i < str.length && /[a-zA-Z0-9_-]/.test(str[i])) {
          i++;
        }
        var word = str.substring(start, i);

        var isFunc = (i < str.length && str[i] === '(');
        if (isFunc) {
          if (UnoresX.FUNCTION_ALIASES[word] !== undefined) {
            result += UnoresX.FUNCTION_ALIASES[word];
          } else {
            result += word;
          }
        } else {
          if (UnoresX.KEYWORD_ALIASES[word] !== undefined) {
            result += UnoresX.KEYWORD_ALIASES[word];
          } else {
            result += word;
          }
        }
      } else {
        result += char;
        i++;
      }
    }
    return result;
  }

  UnoresX.parseValue = parseValue;
  UnoresX.expandAliases = expandAliases;
})(UnoresX);
