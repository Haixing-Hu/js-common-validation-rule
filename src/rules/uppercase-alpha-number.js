////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * 验证字符串是否是数字和大写字母组合成字符串。
 *
 * 这类字符串通常可以用来表示证件编号、发票号等数据。
 *
 * @author 胡海星
 * @private
 */
const UPPERCASE_ALPHA_NUMBER_REGEXP = /^\s*[0-9A-Z]+\s*$/;

/**
 * 数字和大写字母组合字符串验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const UppercaseAlphaNumberRule = {
  /**
   * 测试一个字符串是否是数字和大写字母组合成字符串。
   *
   * 这类字符串通常可以用来表示证件编号、发票号等数据。
   *
   * 注意此函数允许字符串首位出现空格。
   *
   * @param {any} str
   *    待测试的字符串。
   * @return {boolean}
   *    若该字符串是数字和大写字母组合成字符串则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(str) {
    if ((typeof str === 'string') || (str instanceof String)) {
      return UPPERCASE_ALPHA_NUMBER_REGEXP.test(str);
    } else {
      return false;
    }
  },
};

export default UppercaseAlphaNumberRule;
