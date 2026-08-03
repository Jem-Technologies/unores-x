# Unores-X

> **Grammar-driven & metadata-driven runtime CSS engine (zero build step required).**

Unores-X automatically scans your DOM class names (e.g. `p10`, `flex`, `m20`, `hover-bg-red-500`, `md-p20`) and generates atomic CSS rules on the fly into an injected `<style>` tag.

---

## ⚡ Quick Start

### Option 1: HTML Script Tag (Zero Build Step)

```html
<!-- CDN load (unpkg or jsdelivr) -->
<script src="https://unpkg.com/unores-x/dist/unores-x.min.js"></script>

<!-- Write clean atomic utility classes directly in your HTML -->
<div class="f fc p20 gap15 bg-white br10 bs-2px md-p30">
  <h1 class="fs24 fw700 c-333">Hello Unores-X</h1>
  <button class="p10-20 bg-blue-600 c-fff br6 h-bg-blue-700 cp">
    Click Me
  </button>
</div>
```

---

### Option 2: NPM / ES Module (Vite, Next.js, Webpack)

```bash
npm install unores-x
```

```javascript
// Import anywhere in your entry file (e.g. main.js / App.jsx)
import UnoresX from 'unores-x';

// Unores-X automatically boots, scans the document, and observes DOM changes.
```

---

## 🎨 Syntax Overview

Classes can be written directly without any required prefix (e.g. `p10` instead of `u-p10`), though `u-` is still supported for backward compatibility.

| Feature | Example | Compiled CSS Output |
| :--- | :--- | :--- |
| **Padding / Margin** | `p10`, `m20`, `px15`, `py8` | `padding: 10px;`, `margin: 20px;`, `padding-left: 15px; padding-right: 15px;` |
| **Flexbox / Grid** | `f`, `fc`, `g`, `gtc3`, `gap10` | `display: flex; flex-direction: column; display: grid; gap: 10px;` |
| **Sizing** | `w100p`, `h50`, `maxw800` | `width: 100%; height: 50px; max-width: 800px;` |
| **States** | `h-bg-blue`, `f-ol-none` | `.h-bg-blue:hover { background: #00f; }` |
| **Breakpoints** | `sm-p10`, `md-p20`, `lg-p30` | `@media (min-width: 768px) { .md-p20 { padding: 20px; } }` |
| **Important** | `p10i`, `dn-i` | `padding: 10px !important; display: none !important;` |
| **Custom Values** | `w[350px]`, `bg[#121212]` | `width: 350px; background: #121212;` |
| **CSS Variables** | `bg--theme-bg`, `c--primary` | `background: var(--theme-bg); color: var(--primary);` |

---

## ⚙️ JavaScript API

If you need to manually trigger scanning or query the engine:

```javascript
import UnoresX from 'unores-x';

// Manually add classes to the runtime engine
UnoresX.add(['p15', 'bg-red-500']);

// Force a full DOM rescan
UnoresX.rescan();

// Dump generated CSS text
console.log(UnoresX.dump());

// Check count of active compiled rules
console.log(UnoresX.count);
```

---

## 📄 License

MIT © [Jem-Technologies](https://github.com/Jem-Technologies)
