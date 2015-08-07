# ohms-law

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
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

```bash
% npm test
```

[npm-image]: https://img.shields.io/npm/v/ohms-law.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ohms-law
[travis-image]: https://img.shields.io/travis/chrisbuttery/ohms-law.svg?style=flat-square
[travis-url]: https://travis-ci.org/chrisbuttery/ohms-law
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[coveralls-image]: https://img.shields.io/coveralls/chrisbuttery/ohms-law.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chrisbuttery/ohms-law?branch=master
