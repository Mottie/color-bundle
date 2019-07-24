# Color Bundle

Using the [CDN version of Qix-'s color](https://cdn.jsdelivr.net/npm/color@3.1.2/index.min.js) code includes a `require`, so it can't be run in a browser. This bundled version uses rollup to combine all the dependencies and make a stand-alone version of color.

Additionally, this bundle exposes all named colors in `Color.namedColors`.

## Install via [npm](https://npmjs.org/)

```bash
$ npm install color-bundle
```

## Usage

```js
const color = require("color-bundle");
console.log(color("#bada55e5").rgb().toString());
// => "rgba(186, 218, 85, 0.9)"

console.log(color.namedColors.rebeccapurple);
// => [102, 51, 153] // [r, g, b]
```

## Home page

Source Repo: https://github.com/Qix-/color
Demo page: https://npm.runkit.com/color
