////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * 布尔值验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const BoolRule = {
  /**
   * 测试一个值是否是一个布尔值或表示合法布尔值的字符串。
   *
   * 测试时忽略大小写。
   *
   * 注意此函数允许字符串前后出现空格。
   *
   * @param {any} value
   *    待测试的值。
   * @return {boolean}
   *    若该值是一个布尔值或表示合法布尔值的字符串，则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(value) {
    const type = typeof value;
    if ((type === 'boolean') || (value instanceof Boolean)) {
      return true;
    } else if ((type === 'string') || (value instanceof String)) {
      const val = value.trim().toLowerCase();
      return (val === 'true' || val === 'false');
    } else {
      return false;
    }
  },
};

export default BoolRule;
