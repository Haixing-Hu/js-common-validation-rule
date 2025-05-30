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
 * 验证中国手机号码的正则表达式
 *
 * - 手机号码可以以 "0", "86", "17951" 开头
 * - 手机号码一共11位数字
 * - 各运营商手机号码开头3位数字为
 *     - 移动：134 135 136 137 138 139 147 148 150 151 152 157 158 159 165 172 178
 *            182 183 184 187 188 198
 *     - 联通：130 131 132 145 146 155 156 166 171 175 176 185 186
 *     - 电信：133 149 153 173 174 177 180 181 189 191 199
 *     - 虚拟运营商：170
 *
 * 参考资料：
 * 1. https://blog.csdn.net/fengshi_sh/article/details/12085307
 * 2. http://www.cnblogs.com/zengxiangzhan/p/phone.html
 *
 * TODO：增加手机号码归属地计算
 *
 * @author 胡海星
 * @private
 */
const MOBILE_REGEXP = /^\s*(0|86|17951)?(13[0-9]|14[5-9]|15[0-35-9]|16[5-6]|17[0-8]|18[0-9]|19[1589])[0-9]{8}\s*$/;

/**
 * 中国手机号码验证规则。
 *
 * @type {object}
 * @namespace
 * @author 胡海星
 */
const ChinaMobileRule = {
  /**
   * 测试中国手机号码是否合法
   *
   * @param {any} mobile
   *    待测试的手机号码，前后允许有空白字符。
   * @return {boolean}
   *    若手机号码合法则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(mobile) {
    return isString(mobile)
        && (mobile.length !== 0)
        && MOBILE_REGEXP.test(mobile);
  },
};

export default ChinaMobileRule;
