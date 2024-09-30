////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * 验证中华人民共和国军官证号码合法性的正则表达式。
 *
 * 合法的军官证号码由6~8位字母、数字或句点组成。
 *
 * @author 胡海星
 * @private
 */
const NUMBER_REGEXP = /^\s*[a-zA-Z0-9.]{6,8}\s*$/;

/**
 * 中华人民共和国军官证号码验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const ChinaOfficerCardRule = {
  /**
   * 表示军官证的证件类型的字符串。
   *
   * @type string
   * @author 胡海星
   */
  type: 'OFFICER_CARD',

  /**
   * 军官证的证件名称。
   *
   * @type string
   * @author 胡海星
   */
  name: '中国人民解放军军官证',

  /**
   * 检查军官证号码是否合法
   *
   * @param {any} number
   *    军官证号码，前后允许有空白字符。
   * @return {boolean}
   *    若该军官证号码合法，返回true；否则返回false
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

export default ChinaOfficerCardRule;
