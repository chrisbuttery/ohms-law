var test = require('tape')
var ohmsLaw = require('./')

test('Returns voltage', function (t) {
  t.plan(1)
  var current = 0.01
  var resistance = 150
  t.equal(ohmsLaw.getVoltage(current, resistance), 1.5, 'Voltage equals 1.5 (V)')
})

test('Returns resistance', function (t) {
  t.plan(1)
  var voltage = 1.5
  var current = 0.01
  t.equal(ohmsLaw.getResistance(voltage, current), 150, 'Resistance equals 150 (Ω)')
})

test('Returns current', function (t) {
  t.plan(1)
  var voltage = 1.5
  var resistance = 150
  t.equal(ohmsLaw.getCurrent(voltage, resistance), 0.01, 'Current equals 0.01 (A)')
})

test('Throws when param isn\'t a number', function (t) {
  t.plan(3)
  t.throws(ohmsLaw.getVoltage.bind(null, 'foo', 150))
  t.throws(ohmsLaw.getResistance.bind(null, 'foo', 0.01))
  t.throws(ohmsLaw.getCurrent.bind(null, 'foo', 150))
})

test('Throws when param isn\'t provided, null or undefined', function (t) {
  t.plan(3)
  t.throws(ohmsLaw.getVoltage.bind(null, 150))
  t.throws(ohmsLaw.getResistance.bind(null, null, 0.01))
  t.throws(ohmsLaw.getCurrent.bind(null, undefined, 150))
})
