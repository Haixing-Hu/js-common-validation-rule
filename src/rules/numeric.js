////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import NumberRule from './number';

/**
 * 用于测试一个值是否表示合法的数值的规则对象。
 *
 * 数值包括整数和浮点数（`number`, `Number`对象），和大整数（`bigint`）。
 *
 * 表示一个合法数字的字符串（`string`或`String`对象），也被看作是一个合法的数值。
 *
 * **注意：** 和 `NumberRule` 对象不同，`bigint` 值也被看作是一个合法的数值。
 *
 * @type {object}
 * @namespace
 * @see NumberRule
 * @author 胡海星
 */
const NumericRule = {
  /**
   * 测试一个值是否表示一个合法的数值。
   *
   * 数值包括整数和浮点数（`number`, `Number`对象），和大整数（`bigint`）。
   *
   * 表示一个合法数字的字符串（`string`或`String`对象），也被看作是一个合法的数值。
   *
   * 注意此函数允许字符串首位出现空格。
   *
   * **注意：** 和 `NumberRule.isValid()` 不同，`bigint` 值也被看作是一个合法的数值。
   *
   * @param {any} value
   *    待测试的值。
   * @param {object} option
   *    测试选项，表示是否将 ‘NaN’ 或 ‘Infinity’ 也看做是合法的浮点数字符串表示。
   *    此选项对象可以包含下列属性：
   *    - allowNaN: 是否将字符串 'NaN' 也看做是一个表示浮点数的合法字符串；默认值为`false`。
   *    - allowInfinity: 是否将字符串 'Infinity' （注意大小写）也看做是一个表示浮点数的合法字符串；默认值为`false`。
   * @return {boolean}
   *    若该值是一个合法浮点数，或时一个表示合法浮点数的字符串则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(value, option = NumberRule.DEFAULT_OPTION) {
    if (typeof value === 'bigint') {
      return true;
    }
    return NumberRule.isValid(value, option);
  },
};

export default NumericRule;
