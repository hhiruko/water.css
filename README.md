<h1 align="center">Water.css</h1>
<p align="center">🌊 A drop-in collection of CSS styles to make simple websites just a little nicer</p>

[![Water.css](/assets/logo.svg)](https://watercss.kognise.dev/)

<br>

Forked and updated to support `theme-dark` and `theme-light` class selectors to allow manual style switch without swapping to another `CSS` file. In the original `water.css`, each theme has seperate files.

## How to use
By default, `water.css` will try to serve styles according to user's system preferences. However, you can manually override the behaviour by adding `theme-dark` or `theme-light` class selectors to the `<body>` tag. Removing the class will lead to automatic theme handling. E.g:
```html
<!-- This will alway load dark theme -->
<body class="theme-dark">
    ...
</body>
```

## Link stylesheet
Use the prebuilt `dist/water.min.css` file directly in your project. Make sure the corresponding `dist/water.min.css.map` file is in the same folder, so browsers can use it for debugging.

## CDN
You can also get it from jsDelivr:
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@hhiruko/water.css@3.0.2/dist/water.min.css">
```

## NPM
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
