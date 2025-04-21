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
 * 验证字符串是否是数字和字母组合成字符串的正则表达式。
 *
 * 这类字符串通常可以用来表示证件编号、发票号等数据。
 *
 * @author 胡海星
 * @private
 */
const ALPHA_NUMBER_REGEXP = /^\s*[0-9a-zA-Z]+\s*$/;

/**
 * 数字和字母组合字符串的验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const AlphaNumberRule = {

  /**
   * 测试一个值是否是数字和字母组合成字符串。
   *
   * 这类字符串通常可以用来表示证件编号、发票号等数据。
   *
   * @param {any} value
   *    待测试的值，前后允许有空白字符。
   * @return {boolean}
   *    若该字符串是数字和字母组合成字符串则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(value) {
    if (isString(value)) {
      return ALPHA_NUMBER_REGEXP.test(value);
    } else {
      return false;
    }
  },
};

export default AlphaNumberRule;
