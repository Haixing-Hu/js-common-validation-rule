////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * The default length of the verify code.
 *
 * @type {number}
 */
const DEFAULT_VERIFY_CODE_LENGTH = 6;

/**
 * The validation rule of verify codes.
 *
 * @type {object}
 * @author Haixing Hu
 */
const VerifyCodeRule = {
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
    if ((typeof code === 'string') || (code instanceof String)) {
      const n = code.length;
      if (n !== length) {
        return false;
      }
      for (let i = 0; i < n; ++i) {
        if ((code.charCodeAt(i) < 48)     // 48 is the ASCII code of '0'
          || (code.charCodeAt(i) > 57)) { // 57 is the ASCII code of '9'
          return false;
        }
      }
      return true;
    }
    return false;
  },
};

export default VerifyCodeRule;
