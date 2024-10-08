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
const DATE_REGEXP = /^\s*[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}\s*$/;

/**
 * The validation rule of local date values.
 *
 * @type {object}
 * @namespace
 * @author Haixing Hu
 */
const LocalDateRule = {
  /**
   * Tests whether a value represents a valid local date.
   *
   * The value could be a string representing a valid local date, or a built-in
   * `Date` object.
   *
   * If the value is a string, it will be trimmed before testing.
   *
   * Note that this function only tests the format of the date, but not its
   * logical value (e.g. whether a month exceeds 31 days).
   *
   * @param {any} value
   *    The value to be tested. It could be a string primitive, a built-in
   *    `String` object, or a built-in `Date` object. The leading or trailing
   *    white spaces of the string will be trimmed before testing.
   * @return {boolean}
   *    `true` if the value represents a valid local date; `false` otherwise.
   * @author Haixing Hu
   */
  isValid(value) {
    if (value instanceof Date) {
      return true;
    } else if ((typeof value === 'string') || (value instanceof String)) {
      return DATE_REGEXP.test(value.trim());
    } else {
      return false;
    }
  },
};

export default LocalDateRule;
