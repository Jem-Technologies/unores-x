// Grammar Validation & Property Resolver for Unores-X v2
(function (UnoresX) {
  'use strict';

  function resolveClass(tokenResult) {
    if (!tokenResult) return null;

    var rest = tokenResult.rest;
    var result = {
      rules: [],
      selector: '',
      mediaQuery: null
    };

    // 1. Check if the entire rest matches a registered static utility
    if (UnoresX.UTILITIES[rest] !== undefined) {
      var declStr = UnoresX.UTILITIES[rest];
      var decls = declStr.split(';').map(function (d) { return d.trim(); }).filter(Boolean);
      if (tokenResult.isImportant) {
        decls = decls.map(function (d) { return d + ' !important'; });
      }
      result.rules = decls;
    } else {
      // 2. Parse as Property + Value
      var propShorthand = null;
      var valueStr = null;

      // Sort keys descending by length to ensure longest matching prefix is resolved
      var propKeys = Object.keys(UnoresX.PROPERTIES).sort(function (a, b) {
        return b.length - a.length;
      });

      for (var i = 0; i < propKeys.length; i++) {
        var pfx = propKeys[i];
        if (rest.startsWith(pfx)) {
          var remaining = rest.substring(pfx.length);

          var normalizedRemaining = remaining;
          var hasLeadingHyphen = remaining.startsWith('-');

          if (hasLeadingHyphen) {
            if (remaining.startsWith('--')) {
              normalizedRemaining = remaining;
            } else if (remaining.startsWith('-[') && remaining.endsWith(']')) {
              normalizedRemaining = remaining.substring(1);
            } else {
              var metadata = UnoresX.PROPERTIES[pfx];
              if (metadata && metadata.canBeNegative) {
                normalizedRemaining = remaining;
              } else {
                normalizedRemaining = remaining.substring(1);
              }
            }
          }

          var isColor = UnoresX.PROPERTIES[pfx].css === 'background' || UnoresX.PROPERTIES[pfx].css === 'color' || UnoresX.PROPERTIES[pfx].css === 'border-color' || UnoresX.PROPERTIES[pfx].css === 'border' || UnoresX.PROPERTIES[pfx].css === 'background-color' || UnoresX.PROPERTIES[pfx].css === 'border-top-color' || UnoresX.PROPERTIES[pfx].css === 'border-right-color' || UnoresX.PROPERTIES[pfx].css === 'border-bottom-color' || UnoresX.PROPERTIES[pfx].css === 'border-left-color' || UnoresX.PROPERTIES[pfx].css === 'border-top' || UnoresX.PROPERTIES[pfx].css === 'border-right' || UnoresX.PROPERTIES[pfx].css === 'border-bottom' || UnoresX.PROPERTIES[pfx].css === 'border-left' || UnoresX.PROPERTIES[pfx].css === 'outline' || UnoresX.PROPERTIES[pfx].css === 'outline-color' || UnoresX.PROPERTIES[pfx].css === 'column-rule-color' || UnoresX.PROPERTIES[pfx].css === 'caret-color' || UnoresX.PROPERTIES[pfx].css === 'accent-color';
          var startsWithHexLetter = isColor && /^[0-9a-fA-F]/.test(normalizedRemaining);
          var startsWithBrackets = normalizedRemaining.startsWith('[') && normalizedRemaining.endsWith(']');
          var startsWithVar = normalizedRemaining.startsWith('--');
          var startsWithKeyword = UnoresX.KEYWORD_ALIASES[normalizedRemaining] !== undefined;
          var startsWithNumber = /^-?\d|^-?\.\d|^\.\d/.test(normalizedRemaining);

          if (startsWithHexLetter || startsWithBrackets || startsWithVar || startsWithKeyword || startsWithNumber || normalizedRemaining === '') {
            propShorthand = pfx;
            valueStr = normalizedRemaining;
            break;
          }
        }
      }

      if (propShorthand) {
        var metadata = UnoresX.PROPERTIES[propShorthand];
        var finalValue = UnoresX.parseValue(valueStr, metadata);

        if (finalValue !== null && finalValue !== '') {
          var imp = tokenResult.isImportant ? ' !important' : '';

          if (metadata.wrapper) {
            var wrappedVal = metadata.wrapper + '(' + finalValue + ')';
            result.rules = [metadata.css + ':' + wrappedVal + imp];
          } else {
            var cssProperties = Array.isArray(metadata.css) ? metadata.css : [metadata.css];
            var tempRules = [];
            for (var j = 0; j < cssProperties.length; j++) {
              tempRules.push(cssProperties[j] + ':' + finalValue + imp);
            }
            result.rules = tempRules;
          }
        }
      }
    }

    if (result.rules.length === 0) return null;

    var escaped = escapeClass(tokenResult.className);
    var selector = '.' + escaped;

    if (tokenResult.state) {
      selector += ':' + UnoresX.STATES[tokenResult.state];
    }
    if (tokenResult.theme) {
      selector = UnoresX.THEMES[tokenResult.theme] + ' ' + selector;
    }
    result.selector = selector;

    if (tokenResult.breakpoint) {
      var bpName = tokenResult.breakpoint;
      if (bpName.startsWith('max-')) {
        var actualBp = bpName.substring(4);
        result.mediaQuery = '(max-width:' + UnoresX.BREAKPOINTS[actualBp] + 'px)';
      } else {
        result.mediaQuery = '(min-width:' + UnoresX.BREAKPOINTS[bpName] + 'px)';
      }
    }

    return result;
  }

  function escapeClass(className) {
    return className
      .replace(/\[/g, '\\[').replace(/\]/g, '\\]')
      .replace(/#/g, '\\#').replace(/%/g, '\\%')
      .replace(/\./g, '\\.').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
      .replace(/"/g, '\\"')
      .replace(/\//g, '\\/');
  }

  UnoresX.resolveClass = resolveClass;
})(UnoresX);
