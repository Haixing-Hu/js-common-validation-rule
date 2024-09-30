////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import EmailValidator from 'email-validator';

/**
 * 电子邮件地址验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const EmailRule = {
  /**
   * 测试电子邮件地址是否合法。
   *
   * @param {any} email
   *    待测试的电子邮件地址，注意此函数允许字符串前后出现空格。
   * @return {boolean}
   *    若电子邮件地址合法则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(email) {
    return ((typeof email === 'string') || (email instanceof String))
        && EmailValidator.validate(email.trim());
  },
};

export default EmailRule;
