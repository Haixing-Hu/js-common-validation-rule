////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import isString from './impl/is-string';

/**
 * The default length of the verify code.
 *
 * @type {number}
 */
const DEFAULT_VERIFY_CODE_LENGTH = 6;

/**
 * The character code of the digit '0'.
 *
 * @type {number}
 */
const CHAR_CODE_ZERO = '0'.charCodeAt(0);

/**
 * The character code of the digit '9'.
 *
 * @type {number}
 */
const CHAR_CODE_NINE = '9'.charCodeAt(0);

export default {

  /**
   * Tests whether a string is a valid verify code.
   *
   * A valid verify code is a string which contains only digits and has the
   * specified length
   *
   * @param {string} code
   *     The string to be tested.
   * @param {number} length
   *     The optional length of the verify code. The default value is 6.
   * @return
   *     true if the string is a valid verify code; false otherwise
   * @author Haixing Hu
   */
  isValid(code, length = DEFAULT_VERIFY_CODE_LENGTH) {
    if (isString(code) && (code.length === length)) {
      const n = code.length;
      for (let i = 0; i < n; ++i) {
        if ((code.charCodeAt(i) < CHAR_CODE_ZERO) || (code.charCodeAt(i) > CHAR_CODE_NINE)) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  },
};
