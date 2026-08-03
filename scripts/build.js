const fs = require('fs');
const path = require('path');

console.log('📦 Building Unores-X package distributions...');

const srcDir = path.join(__dirname, '..', 'src');
const distDir = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const files = [
  'registry.js',
  'dictionaries.js',
  'tokenizer.js',
  'values.js',
  'grammar.js',
  'emitter.js',
  'compatibility.js',
  'compiler.js',
  'runtime.js'
];

let coreBody = '';

for (const file of files) {
  let content = fs.readFileSync(path.join(srcDir, file), 'utf8');
  if (file === 'registry.js') {
    content = content.replace('var UnoresX = {', 'UnoresX = {\n    ...UnoresX,');
  }
  const lines = content.split('\n').map(line => '  ' + line).join('\n');
  coreBody += `  // ----- Module: ${file} -----\n${lines}\n\n`;
}

// 1. IIFE / Browser Global Bundle (unores-x.js)
let iifeBundle = '/* Unores-X v2 — grammar-driven & metadata-driven runtime CSS engine (zero build step) */\n';
iifeBundle += '(function() {\n  \'use strict\';\n\n';
iifeBundle += '  var UnoresX = {};\n\n';
iifeBundle += coreBody;
iifeBundle += '  if (typeof window !== \'undefined\') {\n';
iifeBundle += '    window.UnoresX = UnoresX;\n';
iifeBundle += '  }\n';
iifeBundle += '  if (typeof globalThis !== \'undefined\') {\n';
iifeBundle += '    globalThis.UnoresX = UnoresX;\n';
iifeBundle += '  }\n';
iifeBundle += '})();\n';

fs.writeFileSync(path.join(distDir, 'unores-x.js'), iifeBundle);

// 2. ESM Bundle (unores-x.esm.js)
let esmBundle = '/* Unores-X v2 — ES Module */\n';
esmBundle += 'var UnoresX = {};\n\n';
esmBundle += coreBody;
esmBundle += 'export default UnoresX;\n';

fs.writeFileSync(path.join(distDir, 'unores-x.esm.js'), esmBundle);

// 3. CommonJS Bundle (unores-x.cjs.js)
let cjsBundle = '/* Unores-X v2 — CommonJS */\n';
cjsBundle += 'var UnoresX = {};\n\n';
cjsBundle += coreBody;
cjsBundle += 'module.exports = UnoresX;\n';

fs.writeFileSync(path.join(distDir, 'unores-x.cjs.js'), cjsBundle);

// 4. Minified IIFE (unores-x.min.js - basic minification pass)
let minified = iifeBundle
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\/\/.*/g, '')
  .replace(/\s+/g, ' ')
  .replace(/\s*([{}();:=,+\-\/*])\s*/g, '$1');

fs.writeFileSync(path.join(distDir, 'unores-x.min.js'), minified);

console.log('✨ Unores-X build complete!');
console.log('   - dist/unores-x.js');
console.log('   - dist/unores-x.min.js');
console.log('   - dist/unores-x.esm.js');
console.log('   - dist/unores-x.cjs.js');
