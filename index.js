'use strict'

module.exports = {

  /**
   * getVoltage
   * Calculate voltage by passing in `current` & `resistance`
   * @param  {Number} current
   * @param  {Number} resistance
   * @return {Number}
   */

  getVoltage: function (current, resistance) {
    return current * resistance
  },

  /**
   * getResistance
   * Calculate resistance by passing in `voltage` & `current`
   * @param  {Number} voltage
   * @param  {Number} current
   * @return {Number}
   */

  getResistance: function (voltage, current) {
    return voltage / current
  },

  /**
   * getCurrent
   * Calculate current by passing in `voltage` & `resistance`
   * @param  {Number} voltage
   * @param  {Number} resistance
   * @return {Number}
   */

  getCurrent: function (voltage, resistance) {
    return voltage / resistance
  }
}
