This practice project will demonstrate how to do the following with webpack:
1. JS/CSS concatenation
2. JS/CSS minification
3. JS/CSS cache busting
4. HTML(+thymeleaf) source manipulation with generated JS/CSS

Running this project:
---------------------
- Install nodejs if you already don't have. This projects uses npm and tested with npm 6. Other version should work but recommended to use 6.
- Go to the project directory and run `npm install`. This should download the node packages in the `node_modules` directory.

How webpack works:
==================
No configuration:
-------------------------
By default without any webpack configuration, webpack will look for a `src/index.js` file and create a minified version of this file to `dist/main.js`. It'll ignore any file other than `index.js` e.g. css files, js files with other name, files inside a directory etc.

Command to build: `npx webpack`

With Basic Configuration
--------------------------------
A configuration file allows to map the source and destination files. In this step we're using webpack to minify a js file `myfile.js` from `src/js` directory to `dist/js/myfile.min.js`
Build command:
`npx webpack` (this will use the default config `webpack.config.js` if present)
or
`npx webpack --config webpack.config.js` (this is useful when our config file name is not the default one)

With Multple JS file
----------------------------
How to add seperate minified js files from different src files. Also shows how to concatenate seperate set of files into one.ss

Generate index.html
---------------------------
Adding the `html-webpack-plugin` will generate a `index.html` file inside the `dist` folder. The file will include a `script` tag for each entry point. 