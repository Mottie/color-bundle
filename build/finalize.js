#!/usr/bin/env node
"use strict";

const fs = require("fs").promises;
const path = require("path");
const Terser = require("terser");

const pkg = require("../package.json");
const colorPkg = require("color/package.json");

const root = path.join(__dirname, "..");
const fileName = `${root}/${pkg.main}`;

const intro = `// Modified bundle of github.com/Qix-/color v${colorPkg.version}\n`;
// Target any definition inside `Color.prototype = {`
const target = "Color.prototype = {";

function cleanup(js) {
  if (js.indexOf(intro.substring(0, 20)) > -1) {
    return js;
  }
  // Add cssKeywords to Color object
  return intro + js.replace(
    target,
    `Color.namedColors = cssKeywords; // Modified from original\n\n\t${target}`
  );
}

async function finalize() {
  const js = await fs.readFile(fileName, "utf8");
  const code = cleanup(js);
  const min = Terser.minify(code);
  if (min.error) {
    console.log(min.error);
    process.exit(1);
  }
  await fs.writeFile(fileName, code);
  await fs.writeFile(fileName.replace(".js", ".min.js"), intro + min.code);
  console.log("\x1b[32m%s\x1b[0m", `${pkg.name} finalized`);
}

finalize();