#webpack2-labs


###Lab1 - Installation and Config https://www.youtube.com/watch?v=JdGnYNtuEtE&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY

1.1. Check
```
node -v
npm -v
```

1.2. Create package.json
```
npm init
```

1.3. install webpack
```
npm i -D webpack
 i - install
-D - install with dependencies
```

1.4. check first 12 available versions
```
npm view webpack versions
```

1.5. check all available versions
```
npm view webpack versions --json
```

1.6. install spesific version
```
npm -g i webpack@2.2.0
```


1.7. run webpack in command line
```
webpack <src file> <destination file> <flags>
webpack .\src\app.js .\dist\app.bundle.js

 -p - production mode - for minifi output
 -d - development mode
--watch - keep webpack running and any changes of app.js will translate into app.bundle.js

webpack .\src\app.js .\dist\app.bundle.js -p --watch
```

1.8. create webpack.config.js
```javascript
module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/app.bundle.js'
    }
};
```
1.9. update scripts section in package.json
```json
{
  "name": "webpack-starter",
  "version": "1.0.0",
  "description": "webpack project starter",
  "main": "index.js",
  "scripts": {
    "dev": "webpack -d --watch",
    "prod": "webpack -p"
  },
  "author": "Kirill Pisarenko",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^2.6npm vi.0"
  }
}
```

1.10. run webpack throw npm
```
npm run dev
npm run prod
```


###lab2 - HTML Webpack Plugin www.youtube.com/watch?v=cKTDYSK0ArI&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY&index=2

2.1. create ./dist/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Project</title>
</head>
<body>
<p>Content goes here.</p>

<script src="app.bundle.js"></script>
</body>
</html>
```
2.2. rename ./dist/index.html to ./dist/index-old.html 

2.3. install html-webpack-plugin https://www.npmjs.com/package/html-webpack-plugin
```
npm i html-webpack-plugin --save-dev
```

2.4. update webpack.config.json
```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: 'dist',
        filename: 'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()]
};
```

in this case I got a lot errors
so, I update webpack from 2.6.0 to 2.2.0
and after that I got

```
npm run dev

> webpack-starter@1.0.0 dev C:\Users\root\WebstormProjects\webpack2-labs
> webpack -d --watch

Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.output.path: The provided value "dist" is not an absolute path!
```

to solse it update webpack.config.json 
https://github.com/webpack/webpack/issues/4549
```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()]
};
```

Now it works well and webpack generated app.bundle.js and index.html
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
</head>
<body>
<script type="text/javascript" src="app.bundle.js"></script>
</body>
</html>
```

2.5. configure html-webpack-plugin 
```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'MyProject',
        content:'Content placed here.',
        template: './src/index.html'
    })]
};

```

and add html/ejs template
./src/index.html
```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
<p><%= htmlWebpackPlugin.options.content %></p>
</body>
</html>
```

html-webpack-plugin will inject generated js file and replace <%= htmlWebpackPlugin.options.content %>

2.6. optimize html
```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'MyProject',
        content:'Content placed here.',
        template: './src/index.html',
        minify: {
            collapseWhitespace: true
        } 
    })]
};
```

2.7. add hash

```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'MyProject',
        content:'Content placed here.',
        template: './src/index.html',
        minify: {
            collapseWhitespace: true
        },
        hash: true
    })]
};
```

2.8. change default name for generated file from template

```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'MyProject',
        content:'Content placed here.',
        template: './src/index.html',
        filename: 'my-index.html',
        minify: {
            collapseWhitespace: true
        },
        hash: true
    })]
};
```

2.9. Generating Multiple HTML Files

```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({
        title: 'MyProject',
        content:'Content placed here.',
        template: './src/index.html',
        filename: 'my-index.html',
        minify: {
            collapseWhitespace: true
        },
        hash: true
    })]
};
```