////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isNumber, isString } from '@qubit-ltd/type-detect';

/**
 * 验证字符串是否表示合法的数字的正则表达式。
 *
 * 数字可以是正数或者负数，可以是科学计数法，并且只考虑十进制。
 *
 * 注意，此正则表达式不考虑 `NaN` 和 `Infinity`.
 *
 * @author 胡海星
 * @private
 */
const NUMBER_REGEXP = /^\s*[+-]?(?:\d+\.?|\d*\.\d+)(?:[E|e][+|-]?\d+)?\s*$/;

/**
 * 用于测试一个值是否表示合法的数字的规则对象。
 *
 * 数字包括整数和浮点数（`number`, `Number`对象），但**不包括**大整数（`bigint`）。
 *
 * 表示一个合法数字的字符串（`string`或`String`对象），也被看作是一个合法的数字。
 *
 * 数字可以是正数或者负数，可以是科学计数法，并且只考虑十进制。
 *
 * **注意：** 和 `NumericRule` 对象不同，`bigint` 值不被看作是一个合法的数字。
 *
 * @type {object}
 * @namespace
 * @see NumericRule
 * @author 胡海星
 */
const NumberRule = {

  /**
   * 默认的测试选项。
   */
  DEFAULT_OPTION: {
    allowNaN: false,
    allowInfinity: false,
  },

  /**
   * 测试一个值是否表示一个合法的数字。
   *
   * 数字包括整数和浮点数（`number`, `Number`对象），但**不包括**大整数（`bigint`）。
   *
   * 表示一个合法数字的字符串（`string`或`String`对象），也被看作是一个合法的数字。
   *
   * 数字可以是正数或者负数，可以用科学计数法，并且只考虑十进制。
   *
   * 注意此函数允许字符串首位出现空格。
   *
   * **注意：** 和 `NumericRule.isValid()` 不同，`bigint` 值不被看作是一个合法的数字。
   *
   * @param {any} value
   *    待测试的值，前后允许有空白字符。
   * @param {object} option
   *    测试选项，表示是否将 'NaN' 或 'Infinity' 也看做是合法的数字字符串表示。
   *    此选项对象可以包含下列属性：
   *    - allowNaN: 是否将字符串 'NaN' 也看做是一个表示浮点数的合法字符串；默认值为`false`。
   *    - allowInfinity: 是否将字符串 'Infinity' （注意大小写）也看做是一个表示浮点数的合法字符串；默认值为`false`。
   * @return {boolean}
   *    若该值是一个合法数字，或时一个表示合法数字的字符串则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(value, option = this.DEFAULT_OPTION) {
    if (isNumber(value)) {
      const val = Number(value);  // should convert value to primitive number
      if (Number.isNaN(val)) {
        return (option.allowNaN === true);
      } else if (!Number.isFinite(val)) {
        return (option.allowInfinity === true);
      }
      return true;
    } else if (isString(value)) {
      value = value.trim();
      if (value.length === 0) {
        return false;
      }
      if (NUMBER_REGEXP.test(value)) {
        return true;
      }
      if (option.allowNaN && value.trim() === 'NaN') {
        return true;
      }
      if (option.allowInfinity && value.trim() === 'Infinity') {
        return true;
      }
    }
    return false;
  },
};

export default NumberRule;
