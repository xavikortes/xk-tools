# xk-tools

Opinionated & preconfigured tools for **lint**, **format**, **test** & **typecheck**. \
Powered by **eslint**, **prettier**, **jest** & **typescript**.

## Installation and configuration

You can install it in your project

```
npm install --save-dev xk-tools
```

Then, config eslint, prettier, jest or typescript extending from default config:

**.eslintrc.js**
```
module.exports = require("./node_modules/xk-tools/eslint.js");
```

**.prettierrc**
```
module.exports = require("./node_modules/xk-tools/prettier.js");
```

**tsconfig.json**
```
{ "extends": "./node_modules/xk-tools/tsc.json" }
```

**jest.config.js**
```
module.exports = require("./node_modules/xk-tools/jest.js");
```

## Available scripts

- **xk-lint-check** \
    Alias for ```eslint $@```
- **xk-lint** \
    Alias for ```eslint --fix $@```
- **xk-format-check** \
    Alias for ```prettier -l $@```
- **xk-format** \
    Alias for ```prettier -w $@```
- **xk-test** \
    Alias for ```jest $@```

## Inspiration

[Kent C. Dodds - kcd-scripts](https://github.com/kentcdodds/kcd-scripts)

## Issues

Feel free to report any bug or suggest any new feature at [xk-tools Issues](https://github.com/xavikortes/xk-tools/issues)

## LICENSE

MIT
