import cjs from "rollup-plugin-cjs-es";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "build/index.js",
  output: {
    file: "color.js",
    format: "iife",
    name: "Color"
  },
  cache: false,
  plugins: [
    resolve(),
    cjs({
      nested: true,
      exportType: {
        "node_modules/color/index.js": "default"
      }
    })
  ]
};
