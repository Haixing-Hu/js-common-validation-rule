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
 * 验证字符串是否表示合法的时间戳的正则表达式。
 *
 * @author 胡海星
 * @private
 */
const TIMESTAMP_REGEXP = /^\s*[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}([ ]?T?[0-2]?[0-9]:[0-5]?[0-9](:[0-5]?[0-9](\.[0-9]{1,3})?)?)?([ ]*[Zz])?\s*$/;

/**
 * 时间戳验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const TimestampRule = {
  /**
   * 测试一个字符串是否表示一个合法的时间戳。
   *
   * 一个合法的时间戳字符串应该符合以下格式：
   *
   * ```
   * yyyy-MM-dd[ ][T][HH:mm[:ss[.S[S[S]]]]][ ][Z|z]
   * ```
   *
   * 注意此函数允许字符串首位出现空格。
   *
   * 注意，此函数只考虑时间戳格式是否正确，不考虑时间戳的逻辑合理性（比如某个月超过了31天）。
   *
   * @param {any} timestamp
   *    待测试的字符串，前后允许有空白字符。
   * @return {boolean}
   *    若该字符串表示一个合法的时间戳则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(timestamp) {
    if (isString(timestamp)) {
      return TIMESTAMP_REGEXP.test(timestamp);
    } else {
      return false;
    }
  },
};

export default TimestampRule;
