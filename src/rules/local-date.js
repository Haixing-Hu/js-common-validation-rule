////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isDate, isString } from '@qubit-ltd/type-detect';

/**
 * 有效本地日期的正则表达式。
 *
 * @author 胡海星
 * @private
 */
const DATE_REGEXP = /^\s*[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}\s*$/;

/**
 * 本地日期值的验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const LocalDateRule = {
  /**
   * 测试一个值是否表示有效的本地日期。
   *
   * 该值可以是表示有效本地日期的字符串，或者内置的`Date`对象。
   *
   * 如果该值是字符串，在测试前会被去除前后空格。
   *
   * 注意，此函数仅测试日期的格式，而不测试其逻辑值（例如，一个月是否超过31天）。
   *
   * @param {any} value
   *    要测试的值。它可以是字符串原始值、内置的`String`对象或内置的`Date`对象。
   *    字符串的前导或尾随空格将在测试前被去除。
   * @return {boolean}
   *    如果该值表示有效的本地日期，则返回`true`；否则返回`false`。
   * @author 胡海星
   */
  isValid(value) {
    if (isDate(value)) {
      return true;
    } else if (isString(value)) {
      return DATE_REGEXP.test(value.trim());
    } else {
      return false;
    }
  },
};

export default LocalDateRule;
