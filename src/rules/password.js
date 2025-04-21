////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isString } from '@qubit-ltd/type-detect';

/**
 * 验证字符串是否是合法的密码的正则表达式。
 *
 * 密码的规则如下：
 *
 * - 最少6个字符；
 * - 最多32个字符；
 * - 可以包含字母、数字；
 * - 可以包含下列特殊字符：`~!@#$%^&*()_=+{}[]|\:;'",./?<>`；
 *
 * @author 胡海星
 * @private
 */
const PASSWORD_REGEXP = /^[-a-zA-Z0-9`~!@#$%^&*()_=+{}[\]|\\:;'",./?<>]+$/;

/**
 * 密码的验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const PasswordRule = {
  /**
   * 密码的最小长度。
   */
  minLength: 6,

  /**
   * 密码的最大长度。
   */
  maxLength: 32,

  /**
   * 测试一个值是否是合法的密码。
   *
   * 密码的规则如下：
   *
   * - 最少6个字符；
   * - 最多32个字符；
   * - 可以包含字母、数字；
   * - 可以包含下列特殊字符：`~!@#$%^&*()_=+{}[]|\:;'",./?<>`；
   *
   * @param {any} value
   *    待测试的值，前后不允许有空白字符。
   * @return {boolean}
   *    若该字符串是一个表示合法密码的字符串则返回`true`；否则返回`false`。
   * @author 胡海星
   */
  isValid(value) {
    if (isString(value)) {
      return (value.length >= this.minLength)
        && (value.length <= this.maxLength)
        && PASSWORD_REGEXP.test(value);
    } else {
      return false;
    }
  },
};

export default PasswordRule;
