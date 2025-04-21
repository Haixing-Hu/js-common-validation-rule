////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isBigInt, isNumber, isString } from '@qubit-ltd/type-detect';

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
   *    待测试的值，前后允许有空白字符。
   * @return {boolean}
   *    若该值是一个表示整数的`number`，`Number`或`bigint`，或表示整数的字符串，则返回true；
   *    否则返回false。
   * @author 胡海星
   */
  isValid(value) {
    if (isBigInt(value)) {
      return true;
    } else if (isNumber(value)) {
      return Number.isInteger(Number(value));
    } else if (isString(value)) {
      return INTEGER_REGEXP.test(value);
    } else {
      return false;
    }
  },
};

export default IntegerRule;
