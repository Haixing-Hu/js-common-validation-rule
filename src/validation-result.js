////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * 验证结果的类。
 *
 * @author 胡海星
 */
class ValidationResult {
  /**
   * 表示验证是否成功。
   *
   * @type {boolean}
   */
  success = true;

  /**
   * 验证结果的描述。
   *
   * @type {string}
   */
  description = '';

  /**
   * 下一个验证结果。
   *
   * 如果验证有多个失败结果，下一个失败结果将链接到此字段。
   *
   * @type {ValidationResult | null}
   */
  next = null;

  /**
   * 创建一个新的 {@link ValidationResult} 对象。
   *
   * @param {boolean} success
   *     新对象的验证正确性标志。如果未提供，则使用默认值 `true`。
   * @param {string} description
   *     新对象的验证结果描述。如果未提供，默认值为空字符串。
   */
  constructor(success = true, description = '') {
    this.success = success ?? true;
    this.description = description ?? '';
    this.next = null;
  }

  /**
   * 合并多个 {@link ValidationResult} 对象。
   *
   * 如果要合并的所有 {@link ValidationResult} 对象都成功，
   * 则合并结果为单个成功的 {@link ValidationResult} 对象；
   * 否则，合并结果为所有失败的 {@link ValidationResult} 对象的链。
   *
   * @param  {Array} results
   *     多个 {@link ValidationResult} 对象的数组。
   * @return {ValidationResult}
   *     返回将指定的 {@link ValidationResult} 对象数组中的所有对象
   *     合并的结果作为一个新的 {@link ValidationResult} 对象。
   */
  static merge(results) {
    if (Array.isArray(results) && (results.length > 0)) {
      const first = new ValidationResult(true);
      let last = first;
      for (let i = 0; i < results.length; ++i) {
        const result = results[i];
        if (result && !result.success) {
          last.next = result;
          last = result;
        }
      }
      last.next = null;
      if (first.next) {
        last = first.next;
        first.next = null;
        return last;
      } else {
        return first;
      }
    } else {
      return new ValidationResult(true);
    }
  }
}

export default ValidationResult;
