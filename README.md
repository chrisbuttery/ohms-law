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
