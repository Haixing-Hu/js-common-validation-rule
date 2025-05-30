////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isBoolean, isString } from '@qubit-ltd/type-detect';

/**
 * 布尔值验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const BoolRule = {
  /**
   * 测试一个值是否是一个布尔值或表示合法布尔值的字符串。
   *
   * 测试时忽略大小写。
   *
   * @param {any} value
   *    待测试的值，前后允许有空白字符。
   * @return {boolean}
   *    若该值是一个布尔值或表示合法布尔值的字符串，则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(value) {
    if (isBoolean(value)) {
      return true;
    } else if (isString(value)) {
      const val = value.trim().toLowerCase();
      return (val === 'true' || val === 'false');
    } else {
      return false;
    }
  },
};

export default BoolRule;
