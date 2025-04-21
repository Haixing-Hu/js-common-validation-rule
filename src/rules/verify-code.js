////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isString } from '@qubit-ltd/type-detect';

/**
 * 验证码的默认长度。
 *
 * @type {number}
 * @private
 */
const DEFAULT_VERIFY_CODE_LENGTH = 6;

/**
 * 验证码的验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const VerifyCodeRule = {
  /**
   * 测试字符串是否是有效的验证码。
   *
   * 有效的验证码是仅包含数字且具有指定长度的字符串。
   *
   * @param {string} code
   *     要测试的字符串。前后的空格会被忽略。
   * @param {number} length
   *     可选的验证码长度。默认值为6。
   * @return
   *     如果字符串是有效的验证码，则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(code, length = DEFAULT_VERIFY_CODE_LENGTH) {
    if (isString(code)) {
      code = code.trim();
      const n = code.length;
      if (n !== length) {
        return false;
      }
      for (let i = 0; i < n; ++i) {
        if ((code.charCodeAt(i) < 48)     // 48 是 '0' 的ASCII码
          || (code.charCodeAt(i) > 57)) { // 57 是 '9' 的ASCII码
          return false;
        }
      }
      return true;
    }
    return false;
  },
};

export default VerifyCodeRule;
