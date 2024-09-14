////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
/**
 * 验证字符串是否是数字和字母组合成字符串的正则表达式。
 *
 * 这类字符串通常可以用来表示证件编号、发票号等数据。
 *
 * @author 胡海星
 */
const ALPHA_NUMBER_REGEXP = /^\s*[0-9a-zA-Z]+\s*$/;

/**
 * 数字和字母组合字符串的验证规则。
 *
 * @type {object}
 * @author 胡海星
 */
const AlphaNumberRule = {

  /**
   * 测试一个值是否是数字和字母组合成字符串。
   *
   * 这类字符串通常可以用来表示证件编号、发票号等数据。
   *
   * 注意此函数允许字符串首位出现空格。
   *
   * @param {any} value
   *    待测试的值。
   * @return {boolean}
   *    若该字符串是数字和字母组合成字符串则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(value) {
    if ((typeof value === 'string') || (value instanceof String)) {
      return ALPHA_NUMBER_REGEXP.test(value);
    } else {
      return false;
    }
  },
};

export default AlphaNumberRule;
