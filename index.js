'use strict'

/**
 * validateParams
 * Ensure params are provided and are type Number
 */

function validateParams () {
  if (typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number') {
    throw new TypeError('params should be numbers')
  }

  if (arguments[0] == null || arguments[1] == null) {
    throw new TypeError('params are required')
  }
}

module.exports = {

  /**
   * getVoltage
   * Calculate voltage by passing in `current` & `resistance`
   * @param  {Number} c: current
   * @param  {Number} r: resistance
   * @return {Number}
   */

  getVoltage: function (c, r) {
    validateParams(c, r)
    return c * r
  },

  /**
   * getResistance
   * Calculate resistance by passing in `voltage` & `current`
   * @param  {Number} v: voltage
   * @param  {Number} c: current
   * @return {Number}
   */

  getResistance: function (v, c) {
    validateParams(v, c)
    return v / c
  },

  /**
   * getCurrent
   * Calculate current by passing in `voltage` & `resistance`
   * @param  {Number} v: voltage
   * @param  {Number} r: resistance
   * @return {Number}
   */

  getCurrent: function (v, r) {
    validateParams(v, r)
    return v / r
  }
}
