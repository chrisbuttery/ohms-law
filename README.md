# ohms-law

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![js-standard-style][standard-image]][standard-url]

Ohm's Law is made from 3 mathematical equations that shows the relationship between electric voltage, current and resistance.

## Installation

```bash
% npm install ohms-law
```

## Usage

```js
var ohmsLaw = require('ohms-law')

var voltage = ohmsLaw.getVoltage(0.01, 150)
// 1.5 (volts)

var resistance = ohmsLaw.getResistance(1.5, 0.01)
// 150 (ohms)

var current = ohmsLaw.getCurrent()
// 0.01 (amps)
```

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

[npm-image]: https://img.shields.io/npm/v/brick-router.svg?style=flat-square
[npm-url]: https://npmjs.org/package/brick-router
[travis-image]: https://img.shields.io/travis/yoshuawuyts/brick-router.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/brick-router
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
