// Tokenizer for Unores-X v2 (Supports both raw 'p10' and optional prefixed 'u-p10')
(function (UnoresX) {
  'use strict';

  function isValidPropertyOrUtility(part) {
    if (!part) return false;
    if (UnoresX.UTILITIES[part] !== undefined) return true;

    // Check if it starts with any registered property shorthand
    for (var pfx in UnoresX.PROPERTIES) {
      if (part.startsWith(pfx)) {
        var remaining = part.substring(pfx.length);
        // Ensure the remaining part is either empty or starts with a valid value character
        if (remaining === '' || /^-?\d|\[|--/.test(remaining) || /^[0-9a-fA-F]/.test(remaining)) {
          return true;
        }
      }
    }
    return false;
  }

  function tokenize(className) {
    if (!className || typeof className !== 'string') return null;

    var original = className;

    // Support optional 'u-' prefix (e.g., u-p10 -> p10, p10 -> p10)
    var raw = className.startsWith('u-') ? className.slice(2) : className;
    var parts = raw.split('-');

    var result = {
      className: original,
      breakpoint: null,
      theme: null,
      state: null,
      isImportant: false,
      rest: ''
    };

    // 1. Important modifier check (at the end, e.g. p10i)
    if (parts.length > 0 && parts[parts.length - 1] === 'i') {
      result.isImportant = true;
      parts.pop();
    }

    if (parts.length === 0) return null;

    // Helper to match longest token from registry
    function matchPrefix(registry, currentParts) {
      for (var len = currentParts.length; len > 0; len--) {
        var joined = currentParts.slice(0, len).join('-');
        if (registry[joined] !== undefined) {
          return { value: joined, count: len };
        }
      }
      return null;
    }

    // Process parts in sequence: Breakpoint -> Theme -> State -> Property/Utility/Value
    var currentParts = parts;

    // 2. Breakpoint (matches longest breakpoint first)
    var bpMatch = matchPrefix(UnoresX.BREAKPOINTS, currentParts);
    if (!bpMatch) {
      if (currentParts.length >= 2 && currentParts[0] === 'max' && UnoresX.BREAKPOINTS[currentParts[1]] !== undefined) {
        bpMatch = { value: 'max-' + currentParts[1], count: 2 };
      }
    }

    if (bpMatch && currentParts.length > bpMatch.count) {
      result.breakpoint = bpMatch.value;
      currentParts = currentParts.slice(bpMatch.count);
    }

    // 3. Theme (must have at least one part remaining after it)
    var themeMatch = matchPrefix(UnoresX.THEMES, currentParts);
    if (themeMatch && currentParts.length > themeMatch.count) {
      result.theme = themeMatch.value;
      currentParts = currentParts.slice(themeMatch.count);
    }

    // 4. State (must be followed by a valid property or utility)
    var stateMatch = matchPrefix(UnoresX.STATES, currentParts);
    if (stateMatch && currentParts.length > stateMatch.count) {
      var isState = true;
      var potentialStateName = stateMatch.value;

      // Handle naming overlap (c -> checked vs color, h -> hover vs height, fw -> focus-within vs font-weight)
      if (potentialStateName === 'c' || potentialStateName === 'h' || potentialStateName === 'fw') {
        var nextPart = currentParts[stateMatch.count];
        if (nextPart) {
          if (nextPart.startsWith('[') || nextPart.startsWith('--') || /^[0-9a-fA-F]{3,8}$/.test(nextPart) || /^\d/.test(nextPart)) {
            isState = false;
          }
        }
      }

      if (isState) {
        var nextRemaining = currentParts.slice(stateMatch.count);
        var remainingStr = nextRemaining.join('-');
        if (isValidPropertyOrUtility(remainingStr)) {
          result.state = potentialStateName;
          currentParts = nextRemaining;
        }
      }
    }

    if (currentParts.length === 0) return null;

    // Remaining string is the property, utility, and/or value
    result.rest = currentParts.join('-');

    return result;
  }

  UnoresX.tokenize = tokenize;
})(UnoresX);
