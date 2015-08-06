var test = require('tape')
var ohmsLaw = require('./')

test('Get voltage', function (t) {
  var current = 0.01
  var resistance = 150
  t.equal(ohmsLaw.getVoltage(current, resistance), 1.5, 'Voltage equals 1.5 (V)')
  t.end()
})

test('Get resistance', function (t) {
  var voltage = 1.5
  var current = 0.01
  t.equal(ohmsLaw.getResistance(voltage, current), 150, 'Resistance equals 150 (Ω)')
  t.end()
})

test('Get current', function (t) {
  var voltage = 1.5
  var resistance = 150
  t.equal(ohmsLaw.getCurrent(voltage, resistance), 0.01, 'Current equals 0.01 (A)')
  t.end()
})
