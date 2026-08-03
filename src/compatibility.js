// Backward Compatibility Layer for Legacy Unores-X syntaxes
(function (UnoresX) {
  'use strict';

  function resolveLegacyCompatibility(className) {
    if (!className || typeof className !== 'string') return null;

    var raw = className.startsWith('u-') ? className.slice(2) : className;
    var parts = raw.split('-');

    if (parts.length === 0) return null;

    var isImportant = false;
    if (parts[parts.length - 1] === 'i') {
      isImportant = true;
      parts.pop();
    }

    if (parts.length === 0) return null;

    var rest = parts.join('-');

    // Compatibility for custom legacy styles:
    // 1. bd-y -> border-top: var(--line) & border-bottom: var(--line)
    if (rest === 'bd-y' || (rest.startsWith('bd-y') && /^\d+$/.test(rest.substring(4)))) {
      return {
        rules: ['border-top:var(--line)', 'border-bottom:var(--line)'],
        isLegacy: true
      };
    }

    // 2. wb-l[num] -> webkit line clamp
    if (rest.startsWith('wb-l') && /^\d+$/.test(rest.substring(4))) {
      var lines = rest.substring(4);
      var imp = isImportant ? ' !important' : '';
      return {
        rules: ['display:-webkit-box', '-webkit-box-orient:vertical', '-webkit-line-clamp:' + lines, 'overflow:hidden' + imp],
        isLegacy: true
      };
    }

    // 3. gl[num] -> backdrop-filter glass blur
    if (rest.startsWith('gl') && /^\d+$/.test(rest.substring(2))) {
      var glVal = rest.substring(2);
      var imp = isImportant ? ' !important' : '';
      return {
        rules: ['backdrop-filter:blur(' + (glVal * 2) + 'px)' + imp],
        isLegacy: true
      };
    }

    // 4. gtc[num] / gtr[num] shorthand grid repeat
    if (rest.startsWith('gtc') && /^\d+$/.test(rest.substring(3))) {
      var gtcVal = rest.substring(3);
      var imp = isImportant ? ' !important' : '';
      return {
        rules: ['grid-template-columns:repeat(' + gtcVal + ',minmax(0,1fr))' + imp],
        isLegacy: true
      };
    }

    if (rest.startsWith('gtr') && /^\d+$/.test(rest.substring(3))) {
      var gtrVal = rest.substring(3);
      var imp = isImportant ? ' !important' : '';
      return {
        rules: ['grid-template-rows:repeat(' + gtrVal + ',minmax(0,1fr))' + imp],
        isLegacy: true
      };
    }

    // 5. tr -> transition: all 150ms ease
    if (rest === 'tr') {
      var imp = isImportant ? ' !important' : '';
      return {
        rules: ['transition:all 150ms ease' + imp],
        isLegacy: true
      };
    }

    // 6. tr[num] -> transition all [num]00ms ease
    if (rest.startsWith('tr') && rest.length > 2 && !isNaN(parseInt(rest.charAt(2), 10)) && /^\d+$/.test(rest.substring(2))) {
      var imp = isImportant ? ' !important' : '';
      return {
        rules: ['transition:all ' + rest.substring(2) + '00ms ease' + imp],
        isLegacy: true
      };
    }

    // 7. te / teio
    if (rest === 'te') {
      var imp = isImportant ? ' !important' : '';
      return {
        rules: ['transition-timing-function:ease' + imp],
        isLegacy: true
      };
    }
    if (rest === 'teio') {
      var imp = isImportant ? ' !important' : '';
      return {
        rules: ['transition-timing-function:ease-in-out' + imp],
        isLegacy: true
      };
    }

    return null;
  }

  UnoresX.resolveLegacyCompatibility = resolveLegacyCompatibility;
})(UnoresX);
