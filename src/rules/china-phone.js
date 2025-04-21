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
 * 验证中国固定电话号码的正则表达式
 *
 * - 国内固定电话和传真的格式基本都是带有0的区号+连接符"-"＋电话号码；
 * - 另外还有可能有分机号
 * - 区号有3位、4位，电话号码有7位和8位的
 * - 其它格式的有前面不带0的，或者不带连接符的
 * - 或者分机号前面使用#号的，或者前面加"+86"的等等；
 *
 * 参考资料：
 * 1. https://blog.csdn.net/lyhjava/article/details/52316438
 *
 * FIXME：验证此规则正确性，并重构规则
 *
 * @author 胡海星
 * @private
 */
const PHONE_REGEXP = /^\s*(\+?\d{2,4}[-_－—]?\d{3,8}([-_－—]?\d{1,8}){0,2}|0?1[35]\d{9})\s*$/;

/**
 * 中国固定电话号码验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const ChinaPhoneRule = {
  /**
   * 测试中国固定电话号码是否合法
   *
   * @param {any} phone
   *    待测试的固定电话号码，前后允许有空白字符。
   * @return {boolean}
   *    若固定电话号码合法则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(phone) {
    return isString(phone)
        && (phone.length !== 0)
        && PHONE_REGEXP.test(phone);
  },
};

export default ChinaPhoneRule;
