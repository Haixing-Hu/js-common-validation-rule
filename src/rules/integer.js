////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
/**
 * 验证字符串是否表示合法的整数的正则表达式。
 *
 * 整数可以是正数或者负数，只考虑十进制。
 *
 * @author 胡海星
 * @private
 */
const INTEGER_REGEXP = /^\s*[+-]?\d+\s*$/;

/**
 * 整数验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const IntegerRule = {
  /**
   * 测试一个值是否表示一个合法的整数。
   *
   * 整数可以是正数或者负数，只考虑十进制。
   *
   * 注意此函数允许字符串首位出现空格。
   *
   * @param {any} value
   *    待测试的值。
   * @return {boolean}
   *    若该值是一个表示整数的`number`，`Number`或`bigint`，或表示整数的字符串，则返回true；
   *    否则返回false。
   * @author 胡海星
   */
  isValid(value) {
    const type = typeof value;
    if (type === 'bigint') {
      return true;
    } else if (type === 'number') {
      return Number.isInteger(value);
    } else if (value instanceof Number) {
      return Number.isInteger(Number(value));   // should convert value to primitive number
    } else if ((type === 'string') || (value instanceof String)) {
      return INTEGER_REGEXP.test(value);
    } else {
      return false;
    }
  },
};

export default IntegerRule;
