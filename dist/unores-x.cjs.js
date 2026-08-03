/* Unores-X v2 — CommonJS */
var UnoresX = {};

  // ----- Module: registry.js -----
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
  
    UnoresX = {
      ...UnoresX,
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
  

  // ----- Module: dictionaries.js -----
  // Standard configuration and dictionary values for Unores-X v2
  (function (UnoresX) {
    'use strict';
  
    // Standard properties dictionary
    var props = {
      // Grid Layout
      gtc: { css: 'grid-template-columns', unit: 'px' },
      gtr: { css: 'grid-template-rows', unit: 'px' },
      gta: { css: 'grid-template-areas' },
      gt: { css: 'grid-template' },
      ga: { css: 'grid-area' },
      gc: { css: 'grid-column', canBeNegative: true },
      gr: { css: 'grid-row', canBeNegative: true },
      gcs: { css: 'grid-column-start', canBeNegative: true },
      gce: { css: 'grid-column-end', canBeNegative: true },
      grs: { css: 'grid-row-start', canBeNegative: true },
      gre: { css: 'grid-row-end', canBeNegative: true },
      gac: { css: 'grid-auto-columns', unit: 'px' },
      gar: { css: 'grid-auto-rows', unit: 'px' },
      gaf: { css: 'grid-auto-flow' },
      gd: { css: 'grid' },
  
      // Flexbox
      fxd: { css: 'flex-direction' },
      fxw: { css: 'flex-wrap' },
      fxf: { css: 'flex-flow' },
      fx: { css: 'flex' },
      fgr: { css: 'flex-grow', unit: '' },
      fsh: { css: 'flex-shrink', unit: '' },
      fbs: { css: 'flex-basis', unit: 'px' },
      ord: { css: 'order', unit: '', canBeNegative: true },
  
      // Gap & Alignment
      gp: { css: 'gap', unit: 'px' },
      cgp: { css: 'column-gap', unit: 'px' },
      rgp: { css: 'row-gap', unit: 'px' },
      jc: { css: 'justify-content' },
      ac: { css: 'align-content' },
      ji: { css: 'justify-items' },
      ai: { css: 'align-items' },
      js: { css: 'justify-self' },
      as: { css: 'align-self' },
      pc: { css: 'place-content' },
      pi: { css: 'place-items' },
      ps: { css: 'place-self' },
  
      // Spacing (Padding)
      p: { css: 'padding', unit: 'px', canBeNegative: true },
      pt: { css: 'padding-top', unit: 'px', canBeNegative: true },
      pr: { css: 'padding-right', unit: 'px', canBeNegative: true },
      pb: { css: 'padding-bottom', unit: 'px', canBeNegative: true },
      pl: { css: 'padding-left', unit: 'px', canBeNegative: true },
      px: { css: ['padding-left', 'padding-right'], unit: 'px', canBeNegative: true },
      py: { css: ['padding-top', 'padding-bottom'], unit: 'px', canBeNegative: true },
      pin: { css: 'padding-inline', unit: 'px', canBeNegative: true },
      pins: { css: 'padding-inline-start', unit: 'px', canBeNegative: true },
      pine: { css: 'padding-inline-end', unit: 'px', canBeNegative: true },
      pbl: { css: 'padding-block', unit: 'px', canBeNegative: true },
      pbls: { css: 'padding-block-start', unit: 'px', canBeNegative: true },
      pble: { css: 'padding-block-end', unit: 'px', canBeNegative: true },
  
      // Spacing (Margin)
      m: { css: 'margin', unit: 'px', canBeNegative: true },
      mt: { css: 'margin-top', unit: 'px', canBeNegative: true },
      mr: { css: 'margin-right', unit: 'px', canBeNegative: true },
      mb: { css: 'margin-bottom', unit: 'px', canBeNegative: true },
      ml: { css: 'margin-left', unit: 'px', canBeNegative: true },
      mx: { css: ['margin-left', 'margin-right'], unit: 'px', canBeNegative: true },
      my: { css: ['margin-top', 'margin-bottom'], unit: 'px', canBeNegative: true },
      min: { css: 'margin-inline', unit: 'px', canBeNegative: true },
      mins: { css: 'margin-inline-start', unit: 'px', canBeNegative: true },
      mine: { css: 'margin-inline-end', unit: 'px', canBeNegative: true },
      mbl: { css: 'margin-block', unit: 'px', canBeNegative: true },
      mbls: { css: 'margin-block-start', unit: 'px', canBeNegative: true },
      mble: { css: 'margin-block-end', unit: 'px', canBeNegative: true },
  
      // Sizing
      w: { css: 'width', unit: 'px' },
      minw: { css: 'min-width', unit: 'px' },
      maxw: { css: 'max-width', unit: 'px' },
      h: { css: 'height', unit: 'px' },
      minh: { css: 'min-height', unit: 'px' },
      maxh: { css: 'max-height', unit: 'px' },
      aspect: { css: 'aspect-ratio' },
      is: { css: 'inline-size', unit: 'px' },
      minis: { css: 'min-inline-size', unit: 'px' },
      maxis: { css: 'max-inline-size', unit: 'px' },
      bsz: { css: 'block-size', unit: 'px' },
      minbs: { css: 'min-block-size', unit: 'px' },
      maxbs: { css: 'max-block-size', unit: 'px' },
  
      // Positioning
      pos: { css: 'position' },
      t: { css: 'top', unit: 'px', canBeNegative: true },
      r: { css: 'right', unit: 'px', canBeNegative: true },
      b: { css: 'bottom', unit: 'px', canBeNegative: true },
      l: { css: 'left', unit: 'px', canBeNegative: true },
      ins: { css: 'inset', unit: 'px', canBeNegative: true },
      inb: { css: 'inset-block', unit: 'px', canBeNegative: true },
      inbs: { css: 'inset-block-start', unit: 'px', canBeNegative: true },
      inbe: { css: 'inset-block-end', unit: 'px', canBeNegative: true },
      ini: { css: 'inset-inline', unit: 'px', canBeNegative: true },
      inis: { css: 'inset-inline-start', unit: 'px', canBeNegative: true },
      inie: { css: 'inset-inline-end', unit: 'px', canBeNegative: true },
      z: { css: 'z-index', unit: '', canBeNegative: true },
  
      // Typography
      fs: { css: 'font-size', unit: 'px' },
      lh: { css: 'line-height', unit: '' },
      fw: { css: 'font-weight', unit: '' },
      ff: { css: 'font-family' },
      fst: { css: 'font-style' },
      fvt: { css: 'font-variant' },
      ls: { css: 'letter-spacing', unit: 'px', canBeNegative: true },
      ta: { css: 'text-align' },
      tt: { css: 'text-transform' },
      td: { css: 'text-decoration' },
      ws: { css: 'white-space' },
      wb: { css: 'word-break' },
      to: { css: 'text-overflow' },
      tsh: { css: 'text-shadow' },
      ti: { css: 'text-indent', unit: 'px', canBeNegative: true },
      wsp: { css: 'word-spacing', unit: 'px', canBeNegative: true },
      lc: { css: 'line-clamp', unit: '' },
      va: { css: 'vertical-align' },
      fstr: { css: 'font-stretch' },
      fk: { css: 'font-kerning' },
      tj: { css: 'text-justify' },
      tdl: { css: 'text-decoration-line' },
      tdc: { css: 'text-decoration-color' },
      tds: { css: 'text-decoration-style' },
      tdt: { css: 'text-decoration-thickness', unit: 'px', canBeNegative: true },
      tuo: { css: 'text-underline-offset', unit: 'px', canBeNegative: true },
  
      // Borders & Outline
      bd: { css: 'border' },
      bw: { css: 'border-width', unit: 'px' },
      bds: { css: 'border-style' },
      bc: { css: 'border-color' },
      bdt: { css: 'border-top' },
      bdtw: { css: 'border-top-width', unit: 'px' },
      bdts: { css: 'border-top-style' },
      bdtc: { css: 'border-top-color' },
      bdr: { css: 'border-right' },
      bdrw: { css: 'border-right-width', unit: 'px' },
      bdrs: { css: 'border-right-style' },
      bdrc: { css: 'border-right-color' },
      bdb: { css: 'border-bottom' },
      bdbw: { css: 'border-bottom-width', unit: 'px' },
      bdbs: { css: 'border-bottom-style' },
      bdbc: { css: 'border-bottom-color' },
      bdl: { css: 'border-left' },
      bdlw: { css: 'border-left-width', unit: 'px' },
      bdls: { css: 'border-left-style' },
      bdlc: { css: 'border-left-color' },
      br: { css: 'border-radius', unit: 'px' },
      brtl: { css: 'border-top-left-radius', unit: 'px' },
      brtr: { css: 'border-top-right-radius', unit: 'px' },
      brbl: { css: 'border-bottom-left-radius', unit: 'px' },
      brbr: { css: 'border-bottom-right-radius', unit: 'px' },
      bdin: { css: 'border-inline' },
      bdinw: { css: 'border-inline-width', unit: 'px' },
      bdins: { css: 'border-inline-style' },
      bdinc: { css: 'border-inline-color' },
      bdbl: { css: 'border-block' },
      bdblw: { css: 'border-block-width', unit: 'px' },
      bdbls: { css: 'border-block-style' },
      bdblc: { css: 'border-block-color' },
      ol: { css: 'outline' },
      olw: { css: 'outline-width', unit: 'px' },
      ols: { css: 'outline-style' },
      olc: { css: 'outline-color' },
      olo: { css: 'outline-offset', unit: 'px', canBeNegative: true },
  
      // Backgrounds
      bg: { css: 'background' },
      bgc: { css: 'background-color' },
      bgi: { css: 'background-image' },
      bgp: { css: 'background-position' },
      bgs: { css: 'background-size' },
      bgr: { css: 'background-repeat' },
      bga: { css: 'background-attachment' },
      bgcl: { css: 'background-clip' },
      bgo: { css: 'background-origin' },
      bgbm: { css: 'background-blend-mode' },
  
      // Colors & Opacity
      c: { css: 'color' },
      op: {
        css: 'opacity',
        normalize: function (value) {
          if (Math.abs(value) <= 1) return value;
          return value / 100;
        }
      },
  
      // Effects & Shadows
      bs: {
        css: 'box-shadow',
        normalize: function (value) {
          if (value === '1px') return '0 1px 2px 0 rgba(0,0,0,0.05)';
          if (value === '2px') return '0 4px 6px -1px rgba(0,0,0,0.1)';
          if (value === '3px') return '0 10px 15px -3px rgba(0,0,0,0.1)';
          return value;
        }
      },
      bl: { css: 'filter', wrapper: 'blur', unit: 'px' },
      fl: { css: 'filter', wrapper: 'blur', unit: 'px' },
      filt: { css: 'filter', wrapper: 'blur', unit: 'px' },
      bdf: { css: 'backdrop-filter', wrapper: 'blur', unit: 'px' },
      mbm: { css: 'mix-blend-mode' },
      iso: { css: 'isolation' },
  
      // Transforms
      tf: { css: 'transform' },
      tfo: { css: 'transform-origin' },
      sc: {
        css: 'transform',
        wrapper: 'scale',
        unit: '',
        normalize: function (value) {
          if (Math.abs(value) <= 1.5) return value;
          return value / 100;
        }
      },
      tx: { css: 'transform', wrapper: 'translateX', unit: 'px', canBeNegative: true },
      ty: { css: 'transform', wrapper: 'translateY', unit: 'px', canBeNegative: true },
      tl: { css: 'transform', wrapper: 'translate', unit: 'px', canBeNegative: true },
      rt: { css: 'transform', wrapper: 'rotate', unit: 'deg', canBeNegative: true },
      sk: { css: 'transform', wrapper: 'skew', unit: 'deg', canBeNegative: true },
      skx: { css: 'transform', wrapper: 'skewX', unit: 'deg', canBeNegative: true },
      sky: { css: 'transform', wrapper: 'skewY', unit: 'deg', canBeNegative: true },
  
      // Transitions & Animations
      tr: { css: 'transition' },
      trp: { css: 'transition-property' },
      dur: { css: 'transition-duration', unit: 'ms' },
      ttf: { css: 'transition-timing-function' },
      del: { css: 'transition-delay', unit: 'ms' },
      an: { css: 'animation' },
      ann: { css: 'animation-name' },
      and: { css: 'animation-duration', unit: 'ms' },
      ant: { css: 'animation-timing-function' },
      any: { css: 'animation-delay', unit: 'ms' },
      ani: { css: 'animation-iteration-count', unit: '' },
      andr: { css: 'animation-direction' },
      anf: { css: 'animation-fill-mode' },
      anp: { css: 'animation-play-state' },
  
      // Scroll & Behavior
      sb: { css: 'scroll-behavior' },
      smg: { css: 'scroll-margin', unit: 'px', canBeNegative: true },
      smgt: { css: 'scroll-margin-top', unit: 'px', canBeNegative: true },
      smgr: { css: 'scroll-margin-right', unit: 'px', canBeNegative: true },
      smgb: { css: 'scroll-margin-bottom', unit: 'px', canBeNegative: true },
      smgl: { css: 'scroll-margin-left', unit: 'px', canBeNegative: true },
      spd: { css: 'scroll-padding', unit: 'px' },
      spdt: { css: 'scroll-padding-top', unit: 'px' },
      spdr: { css: 'scroll-padding-right', unit: 'px' },
      spdb: { css: 'scroll-padding-bottom', unit: 'px' },
      spdl: { css: 'scroll-padding-left', unit: 'px' },
      sst: { css: 'scroll-snap-type' },
      ssa: { css: 'scroll-snap-align' },
      sss: { css: 'scroll-snap-stop' },
      osb: { css: 'overscroll-behavior' },
      osbx: { css: 'overscroll-behavior-x' },
      osby: { css: 'overscroll-behavior-y' },
      ov: { css: 'overflow' },
      ovx: { css: 'overflow-x' },
      ovy: { css: 'overflow-y' },
  
      // Masking & Clipping
      cp: { css: 'clip-path' },
      msk: { css: 'mask' },
      mski: { css: 'mask-image' },
      msks: { css: 'mask-size' },
      mskp: { css: 'mask-position' },
      mskr: { css: 'mask-repeat' },
  
      // SVG
      svgfl: { css: 'fill' },
      flo: { css: 'fill-opacity', unit: '' },
      flr: { css: 'fill-rule' },
      st: { css: 'stroke' },
      stw: { css: 'stroke-width', unit: 'px' },
      sto: { css: 'stroke-opacity', unit: '' },
      sda: { css: 'stroke-dasharray' },
      sdo: { css: 'stroke-dashoffset', unit: 'px' },
      slc: { css: 'stroke-linecap' },
      slj: { css: 'stroke-linejoin' },
      sml: { css: 'stroke-miterlimit', unit: '' },
  
      // Tables
      bdcl: { css: 'border-collapse' },
      bsp: { css: 'border-spacing', unit: 'px' },
      tbl: { css: 'table-layout' },
      cps: { css: 'caption-side' },
      ec: { css: 'empty-cells' },
  
      // Multi-column
      cols: { css: 'columns' },
      colw: { css: 'column-width', unit: 'px' },
      colc: { css: 'column-count', unit: '' },
      colg: { css: 'column-gap', unit: 'px' },
      colr: { css: 'column-rule' },
      colrw: { css: 'column-rule-width', unit: 'px' },
      colrs: { css: 'column-rule-style' },
      colrc: { css: 'column-rule-color' },
      colsp: { css: 'column-span' },
      colf: { css: 'column-fill' },
  
      // Writing Modes & Direction
      wm: { css: 'writing-mode' },
      dir: { css: 'direction' },
      ub: { css: 'unicode-bidi' },
      tor: { css: 'text-orientation' },
      tcu: { css: 'text-combine-upright' },
  
      // Containment & Performance
      ct: { css: 'contain' },
      cv: { css: 'content-visibility' },
      cis: { css: 'contain-intrinsic-size' },
      wc: { css: 'will-change' },
  
      // Lists
      lsy: { css: 'list-style' },
      lst: { css: 'list-style-type' },
      lsp: { css: 'list-style-position' },
      lsi: { css: 'list-style-image' },
  
      // Misc UI
      ap: { css: 'appearance' },
      bxsz: { css: 'box-sizing' },
      cur: { css: 'cursor' },
      car: { css: 'caret-color' },
      us: { css: 'user-select' },
      pe: { css: 'pointer-events' },
      rsz: { css: 'resize' },
      acc: { css: 'accent-color' },
      csch: { css: 'color-scheme' },
      of: { css: 'object-fit' },
      opo: { css: 'object-position' }
    };
  
    // Standard static Utilities dictionary
    var utils = {
      // Display / Flex
      db: 'display:block', di: 'display:inline', dif: 'display:inline-flex', dib: 'display:inline-block', dn: 'display:none',
      f: 'display:flex', fc: 'display:flex; flex-direction:column', fr: 'display:flex; flex-direction:row',
      fw: 'display:flex; flex-wrap:wrap', fnw: 'display:flex; flex-wrap:nowrap',
      g: 'display:grid',
  
      // Positioning
      pr: 'position:relative', pa: 'position:absolute', pf: 'position:fixed', ps: 'position:sticky', i: 'inset',
  
      // Overflow
      oa: 'overflow:auto', oc: 'overflow:clip', oh: 'overflow:hidden', os: 'overflow:scroll', oxh: 'overflow-x:hidden', oxa: 'overflow-x:auto', oxv: 'overflow-x:visible', oys: 'overflow-y:scroll', oya: 'overflow-y:auto', oyh: 'overflow-y:hidden', oyv: 'overflow-y:visible',
  
      // Cursor
      cp: 'cursor:pointer', cn: 'cursor:none', cd: 'cursor:default', ce: 'cursor:ew-resize',
      cnwse: 'cursor:nwse-resize', cns: 'cursor:n-resize', cnesw: 'cursor:nesw-resize', cs: 'cursor:s-resize', cwe: 'cursor:w-resize',
  
      // Visibility
      v: 'visibility:visible', h: 'visibility:hidden',
  
      // Pointer events
      pea: 'pointer-events:auto', pen: 'pointer-events:none',
  
      // Align/Justify shorthands
      'jc-c': 'justify-content:center', 'jc-sb': 'justify-content:space-between', 'jc-sa': 'justify-content:space-around',
      'jc-fe': 'justify-content:flex-end', 'jc-fs': 'justify-content:flex-start', 'ji-c': 'justify-items:center', 'ji-s': 'justify-items:start', 'ji-e': 'justify-items:end', 'ji-st': 'justify-items:stretch',
      'ai-c': 'align-items:center', 'ai-fs': 'align-items:flex-start', 'ai-fe': 'align-items:flex-end', 'ai-s': 'align-items:stretch',
      'as-c': 'align-self:center', 'as-fs': 'align-self:flex-start', 'as-fe': 'align-self:flex-end', 'as-s': 'align-self:stretch', 'as-e': 'align-self:end',
      'ac-c': 'align-content:center', 'ac-sb': 'align-content:space-between', 'ac-sa': 'align-content:space-around', 'ac-fe': 'align-content:flex-end', 'ac-fs': 'align-content:flex-start', 'ac-s': 'align-content:stretch',
  
      // Borders
      b: 'border:1px solid', b0: 'border:none',
      'bs-solid': 'border-style:solid', 'bs-dashed': 'border-style:dashed', 'bs-dotted': 'border-style:dotted',
  
      // Backgrounds
      'bgs-cover': 'background-size:cover', 'bgs-contain': 'background-size:contain',
      'bgp-center': 'background-position:center', 'bgr-no': 'background-repeat:no-repeat',
  
      // Text
      tal: 'text-align:left', tac: 'text-align:center', tar: 'text-align:right',
      'tt-u': 'text-transform:uppercase', 'tt-l': 'text-transform:lowercase', 'tt-c': 'text-transform:capitalize',
      'td-u': 'text-decoration:underline', 'td-n': 'text-decoration:none',
  
      // WebKit
      'wb-sh': '::-webkit-scrollbar{display:none}', 'wb-th0': '-webkit-tap-highlight-color:transparent',
      'wb-ns': '-webkit-user-select:none', 'wb-ms': '-webkit-overflow-scrolling:touch'
    };
  
    // Standard function aliases
    var funcAliases = {
      rep: 'repeat',
      mm: 'minmax',
      'lin-g': 'linear-gradient',
      'rad-g': 'radial-gradient',
      'con-g': 'conic-gradient',
      cl: 'clamp',
      fit: 'fit-content'
    };
  
    // Standard keyword aliases
    var kwAliases = {
      sb: 'space-between',
      sa: 'space-around',
      se: 'space-evenly',
      fs: 'flex-start',
      fe: 'flex-end',
      maxc: 'max-content',
      minc: 'min-content',
      af: 'auto-fit',
      afi: 'auto-fill'
    };
  
    // Register everything to UnoresX
    for (var p in props) {
      if (props.hasOwnProperty(p)) UnoresX.registerProperty(p, props[p]);
    }
    for (var u in utils) {
      if (utils.hasOwnProperty(u)) UnoresX.registerUtility(u, utils[u]);
    }
    for (var f in funcAliases) {
      if (funcAliases.hasOwnProperty(f)) UnoresX.registerFunctionAlias(f, funcAliases[f]);
    }
    for (var k in kwAliases) {
      if (kwAliases.hasOwnProperty(k)) UnoresX.registerKeywordAlias(k, kwAliases[k]);
    }
  
  })(UnoresX);
  

  // ----- Module: tokenizer.js -----
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
  

  // ----- Module: values.js -----
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
  

  // ----- Module: grammar.js -----
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
  

  // ----- Module: emitter.js -----
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
  

  // ----- Module: compatibility.js -----
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
  

  // ----- Module: compiler.js -----
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
  

  // ----- Module: runtime.js -----
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
  

module.exports = UnoresX;
