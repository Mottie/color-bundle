# Color Bundle

Using the [CDN version of Qix-'s color](https://cdn.jsdelivr.net/npm/color@3.1.2/index.min.js) code includes a `require`, so it can't be run in a browser. This bundled version uses rollup to combine all the dependencies and make a stand-alone version of color.

Additionally, this bundle exposes all named colors in `Color.namedColors`.

## Usage

* Download `color.min.js` from this repository.
* Load it in your HTML in a script tag.
* Use the global `Color` function to access the bundle:
  ```html
  <script src="color.min.js" />
  <script>
  console.log(Color("#bada55e5").rgb().toString());
  // => "rgba(186, 218, 85, 0.9)"

  console.log(Color.namedColors.rebeccapurple);
  // => [102, 51, 153] // [r, g, b]
  </script>
  ```

## Home page

Source Repo: https://github.com/Qix-/color

Demo page: https://npm.runkit.com/color
