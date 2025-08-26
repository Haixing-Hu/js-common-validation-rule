////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isString } from '@qubit-ltd/type-detect';

/**
 * 验证字符串是否是小写字母和下划线组合成字符串的正则表达式。
 *
 * 这类字符串通常可以用来表示变量名、函数名等数据。
 *
 * @author 胡海星
 * @private
 */
const LOWERCASE_UNDERSCORE_REGEXP = /^\s*[a-z0-9_]+[a-z0-9_]*\s*$/;

/**
 * 小写字母和下划线组合字符串验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const LowercaseUnderscoreRule = {
  /**
   * 测试一个字符串是否是小写字母和下划线组合成字符串。
   *
   * 这类字符串通常可以用来表示变量名、函数名等数据。
   * 规则：
   * - 只能包含小写字母、数字和下划线
   * - 前后允许有空白字符
   *
   * @param {any} str
   *    待测试的字符串，前后允许有空白字符。
   * @return {boolean}
   *    若该字符串是小写字母和下划线组合成字符串则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(str) {
    if (isString(str)) {
      return LOWERCASE_UNDERSCORE_REGEXP.test(str);
    } else {
      return false;
    }
  },
};

export default LowercaseUnderscoreRule;
