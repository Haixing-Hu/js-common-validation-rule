////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * 有效本地时间的正则表达式。
 *
 * @author 胡海星
 * @private
 */
const TIME_REGEXP = /^\s*(0?[0-9]|1[0-9]|2[0-3]):(0?[0-9]|[0-5][0-9])(:(0?[0-9]|[0-5][0-9]))?\s*$/;

/**
 * 本地时间值的验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const LocalTimeRule = {
  /**
   * 测试一个值是否表示有效的本地时间。
   *
   * 如果该值是字符串，在测试前会被去除前后空格。
   *
   * 有效的本地时间字符串应该符合以下格式：
   * ```
   * [H]H:[m]m[:[s]s]
   * ```
   *
   * 例如，`12:34`、`23:59:59`、`02:32:9`、`1:2:3`等。
   *
   * 注意，此函数仅测试时间的格式，以及其逻辑值（例如，一秒是否超过60）。
   *
   * @param {any} value
   *    要测试的值。它可以是字符串原始值、内置的`String`对象或其他类型。
   *    字符串的前导和尾随空格将在测试前被去除。
   * @return {boolean}
   *    如果该值表示有效的本地时间，则返回`true`；否则返回`false`。
   * @author 胡海星
   */
  isValid(value) {
    if ((typeof value === 'string') || (value instanceof String)) {
      return TIME_REGEXP.test(value);
    } else {
      return false;
    }
  },
};

export default LocalTimeRule;
