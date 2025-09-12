////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import uri from 'node-uri';
import { isString } from '@qubit-ltd/type-detect';

/**
 * URL地址验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const UrlRule = {
  /**
   * 测试URL是否是合法的网址。
   *
   * 合法的网址的schema必须是HTTP或HTTPS协议。
   *
   * @param {String} url
   *    待测试的URL，前后允许有空白字符。
   * @return {Boolean}
   *    若URL合法则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(url) {
    if (isString(url)) {
      const u = url.trim();
      if (u.length === 0) {
        return false;
      }
      try {
        uri.checkWebURL(u);
        return true;
      } catch {
        return false;
      }
    } else {
      return false;
    }
  },
};

export default UrlRule;
