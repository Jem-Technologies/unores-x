// Registry for Unores-X v2 metadata and configurations.
(function (global) {
  'use strict';

  var BREAKPOINTS = Object.create(null);
  var THEMES = Object.create(null);
  var STATES = Object.create(null);
  var PROPERTIES = Object.create(null);
  var UTILITIES = Object.create(null);
  var FUNCTION_ALIASES = Object.create(null);
  var KEYWORD_ALIASES = Object.create(null);

  // Initialize standard breakpoints
  BREAKPOINTS['xs'] = 480;
  BREAKPOINTS['sm'] = 640;
  BREAKPOINTS['md'] = 768;
  BREAKPOINTS['lg'] = 1024;
  BREAKPOINTS['xl'] = 1280;
  BREAKPOINTS['xx'] = 1536;

  // Initialize standard themes
  THEMES['dk'] = '.dark';

  // Initialize standard states
  STATES['h'] = 'hover';
  STATES['f'] = 'focus';
  STATES['a'] = 'active';
  STATES['v'] = 'visited';
  STATES['c'] = 'checked';
  STATES['d'] = 'disabled';
  STATES['fw'] = 'focus-within';
  STATES['fv'] = 'focus-visible';

  var UnoresX = {
    BREAKPOINTS: BREAKPOINTS,
    THEMES: THEMES,
    STATES: STATES,
    PROPERTIES: PROPERTIES,
    UTILITIES: UTILITIES,
    FUNCTION_ALIASES: FUNCTION_ALIASES,
    KEYWORD_ALIASES: KEYWORD_ALIASES,

    clearCache: function () {},

    registerBreakpoint: function (name, minWidth) {
      BREAKPOINTS[name] = minWidth;
      this.clearCache();
    },
    registerTheme: function (name, selector) {
      THEMES[name] = selector;
      this.clearCache();
    },
    registerState: function (name, pseudo) {
      STATES[name] = pseudo;
      this.clearCache();
    },
    registerProperty: function (shorthand, metadata) {
      PROPERTIES[shorthand] = metadata;
      this.clearCache();
    },
    registerUtility: function (shorthand, declaration) {
      UTILITIES[shorthand] = declaration;
      this.clearCache();
    },
    registerFunctionAlias: function (shorthand, full) {
      FUNCTION_ALIASES[shorthand] = full;
      this.clearCache();
    },
    registerKeywordAlias: function (shorthand, full) {
      KEYWORD_ALIASES[shorthand] = full;
      this.clearCache();
    }
  };

  global.UnoresX = UnoresX;
  if (typeof global !== 'undefined') {
    global.UnoresX = UnoresX;
  }
})(typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : this);
