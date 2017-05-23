#webpack2-labs


###Lab1 - Installation and Config www.youtube.com/watch?v=JdGnYNtuEtE&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY

Check
```
node -v
npm -v
```

Create package.json
```
npm init
```

install webpack
```
npm i -D webpack
 i - install
-D - install with dependencies
```

check first 12 available versions
```
npm view webpack versions
```

check all available versions
```
npm view webpack versions --json
```

install spesific version
```
npm -g i webpack@2.2.0
```


run webpack in command line
```
webpack <src file> <destination file> <flags>
webpack .\src\app.js .\dist\app.bundle.js

 -p - production mode - for minifi output
 -d - development mode
--watch - keep webpack running and any changes of app.js will translate into app.bundle.js

webpack .\src\app.js .\dist\app.bundle.js -p --watch
```

create webpack.config.js
```javascript
module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/app.bundle.js'
    }
};
```
update scripts section in package.json
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

###lab2 - HTML Webpack Plugin www.youtube.com/watch?v=cKTDYSK0ArI&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY&index=2

create ./dist/index.html
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

install HTML plugin https://www.npmjs.com/package/html-webpack-plugin
```
npm i html-webpack-plugin --save-dev
```

update webpack.config.json
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
