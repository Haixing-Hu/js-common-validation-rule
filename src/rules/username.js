////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
/**
 * 验证字符串是否是合法的用户名的正则表达式。
 *
 * 用户名的规则如下：
 *
 * - 必须以字母或数字开头；
 * - 只能包含字母、数字、下划线、连字符、点号、@符号；
 * - 长度为4到32个字符。
 *
 * @author 胡海星
 * @private
 */
const USERNAME_REGEXP = /^[a-zA-Z0-9][a-zA-Z0-9@\\._-]*$/;

/**
 * 用户名的验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const UsernameRule = {
  /**
   * 用户名的最小长度。
   */
  minLength: 4,

  /**
   * 用户名的最大长度。
   */
  maxLength: 32,

  /**
   * 测试一个值是否是合法的用户名。
   *
   * 用户名的规则如下：
   *
   * - 必须以字母或数字开头；
   * - 只能包含字母、数字、下划线、连字符、点号、@符号；
   * - 长度为4到32个字符。
   *
   * @param {any} value
   *    待测试的值，前后不允许有空白字符。
   * @return {boolean}
   *    若该字符串是一个表示合法用户名的字符串则返回`true`；否则返回`false`。
   * @author 胡海星
   */
  isValid(value) {
    if ((typeof value === 'string') || (value instanceof String)) {
      return (value.length >= this.minLength)
        && (value.length <= this.maxLength)
        && USERNAME_REGEXP.test(value);
    } else {
      return false;
    }
  },
};

export default UsernameRule;
