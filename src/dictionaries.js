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
