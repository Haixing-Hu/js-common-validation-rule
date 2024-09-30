////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * 验证字符串是否表示合法的本地日期时间的正则表达式。
 *
 * @author 胡海星
 * @private
 */
const DATETIME_REGEXP = /^\s*[0-9]{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (0?[0-9]|1[0-9]|2[0-3]):(0?[0-9]|[1-5][0-9])(:(0?[0-9]|[1-5][0-9]))?\s*$/;

/**
 * 本地日期时间验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const LocalDateTimeRule = {
  /**
   * 测试一个字符串是否表示一个合法的本地日期时间。
   *
   * 一个合法的本地日期时间字符串应该符合以下格式：
   *
   * ```
   * yyyy-MM-dd' 'HH:mm:ss
   * ```
   *
   * 注意此函数允许字符串首位出现空格。
   *
   * 注意，此函数只考虑日期时间格式是否正确，不考虑日期时间的逻辑合理性（比如某个月超过了31天）。
   *
   * @param {any} datetime
   *    待测试的字符串，前后允许有空白字符。
   * @return {boolean}
   *    若该字符串表示一个合法的日期时间则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(datetime) {
    if (((typeof datetime === 'string') || (datetime instanceof String))) {
      return DATETIME_REGEXP.test(datetime);
    } else {
      return false;
    }
  },
};

export default LocalDateTimeRule;
