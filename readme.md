#webpack2-labs


###Lab1 - Installation and Config https://www.youtube.com/watch?v=JdGnYNtuEtE&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY

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


