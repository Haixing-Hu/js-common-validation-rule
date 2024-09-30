////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * 验证其他证件号码合法性的正则表达式。
 *
 * 合法的证件号码由2~60位字母、数字或句点组成。
 *
 * @author 胡海星
 * @private
 */
const NUMBER_REGEXP = /^\s*[a-zA-Z0-9.]{2,60}\s*$/;

/**
 * 其他证件号码验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const OtherCredentialRule = {
  /**
   * 检查其他证件号码是否合法
   *
   * @param {any} number
   *    证件号码，前后允许有空白字符。
   * @return {boolean}
   *    若该证件号码合法，返回true；否则返回false
   * @author 胡海星
   */
  isValid(number) {
    if ((typeof number === 'string') || (number instanceof String)) {
      return NUMBER_REGEXP.test(number);
    } else {
      return false;
    }
  },
};

export default OtherCredentialRule;
