This practice project will demonstrate how to do the following with webpack:
1. JS/CSS concatenation
2. JS/CSS minification
3. JS/CSS cache busting
4. HTML(+thymeleaf) source manipulation with generated JS/CSS


Step 1: No configuration:
By default without any webpack configuration, webpack will look for a `src/index.js` file and create a minified version of this file to `dist/main.js`. It'll ignore any file other than `index.js` e.g. css files, js files with other name, files inside a directory etc.