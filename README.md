<h1 align="center">Water.css</h1>
<p align="center">🌊 A drop-in collection of CSS styles to make simple websites just a little nicer</p>

[![Water.css](https://github.com/kognise/water.css/blob/master/assets/logo.svg)](https://watercss.kognise.dev/)

<br>

Forked and updated to support `theme-dark` and `theme-light` class selectors to allow manual style switch without swapping to another `CSS` file.

## Link stylesheet
Use the prebuilt `dist/water.min.css` file directly in your project. Make sure the corresponding `dist/water.min.css.map` file is in the same folder, so browsers can use it for debugging.

## CDN
You can also get it from jsDelivr:
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hhiruko/water.css@3.0.2/dist/water.min.css">
```

### NPM
1. Install the package from npm:
    ```
    npm i @hhiruko/water.css
    ```
2. Import the package:
   ```
   import '@hhiruko/water.css';
   ```

## Build from source:
1. Install dependencies:
    ```
    npm i
    ```
2. To build a minified version, run:
    ```
    npm run build
    ```
