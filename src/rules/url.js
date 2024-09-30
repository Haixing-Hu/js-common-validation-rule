////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import uri from 'node-uri';

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
   *    待测试的URL，注意此函数允许字符串首位出现空格。
   * @return {Boolean}
   *    若URL合法则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(url) {
    if ((typeof url === 'string') || (url instanceof String)) {
      const u = url.trim();
      if (u.length === 0) {
        return false;
      }
      try {
        uri.checkWebURL(u);
        return true;
      } catch (URIError) {
        return false;
      }
    } else {
      return false;
    }
  },
};

export default UrlRule;
