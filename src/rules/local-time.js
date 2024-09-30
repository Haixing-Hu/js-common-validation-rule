////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * The regular expression of a valid local date.
 *
 * @author Haixing Hu
 * @private
 */
const TIME_REGEXP = /^\s*(0?[0-9]|1[0-9]|2[0-3]):(0?[0-9]|[0-5][0-9])(:(0?[0-9]|[0-5][0-9]))?\s*$/;

/**
 * The validation rule of local time values.
 *
 * @type {object}
 * @namespace
 * @author Haixing Hu
 */
const LocalTimeRule = {
  /**
   * Tests whether a value represents a valid local time.
   *
   * If the value is a string, it will be trimmed before testing.
   *
   * A valid local time string should be in the following format:
   * ```
   * [H]H:[m]m[:[s]s]
   * ```
   *
   * For example, `12:34`, `23:59:59`, `02:32:9`, `1:2:3`, etc.
   *
   * Note that this function only tests the format of the time, as well as its
   * logical value (e.g. whether a second exceeds 60).
   *
   * @param {any} value
   *    The value to be tested. It could be a string primitive, a built-in
   *    `String` object, or other type. The leading and trailing whitespaces
   *    of a string will be trimmed before testing.
   * @return {boolean}
   *    `true` if the value represents a valid local date; `false` otherwise.
   * @author Haixing Hu
   */
  isValid(value) {
    if ((typeof value === 'string') || (value instanceof String)) {
      return TIME_REGEXP.test(value);
    } else {
      return false;
    }
  },
};

export default LocalTimeRule;
