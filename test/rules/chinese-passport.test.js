////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { ChinesePassport } from '../../src';

/**
 * 单元测试{@link ChinesePassport.isValid}。
 *
 * @author 胡海星
 */
describe('ChinesePassport.isValid()', () => {
  test('undefined', () => {
    const number = undefined;
    expect(ChinesePassport.isValid(number)).toBe(false);
  });
  test('null', () => {
    expect(ChinesePassport.isValid(null)).toBe(false);
  });
  test('empty string', () => {
    expect(ChinesePassport.isValid('')).toBe(false);
  });
  test('non string', () => {
    expect(ChinesePassport.isValid(123)).toBe(false);
  });
  test('因私普通电子护照', () => {
    expect(ChinesePassport.isValid('E12345678')).toBe(true);
    expect(ChinesePassport.isValid('EA1234567')).toBe(true);
    expect(ChinesePassport.isValid('EZ1234567')).toBe(true);
    expect(ChinesePassport.isValid('E1234567')).toBe(false);
    expect(ChinesePassport.isValid('E1234567E')).toBe(false);
    expect(ChinesePassport.isValid('EA123456')).toBe(false);
    expect(ChinesePassport.isValid('EA123456E')).toBe(false);
  });
  test('公务普通电子护照', () => {
    expect(ChinesePassport.isValid('PE1234567')).toBe(true);
    expect(ChinesePassport.isValid('PE123456')).toBe(false);
    expect(ChinesePassport.isValid('PE123456E')).toBe(false);
  });
  test('公务电子护照', () => {
    expect(ChinesePassport.isValid('SE1234567')).toBe(true);
    expect(ChinesePassport.isValid('SE123456')).toBe(false);
    expect(ChinesePassport.isValid('SE123456E')).toBe(false);
  });
  test('外交电子护照', () => {
    expect(ChinesePassport.isValid('DE1234567')).toBe(true);
    expect(ChinesePassport.isValid('DE123456')).toBe(false);
    expect(ChinesePassport.isValid('DE123456E')).toBe(false);
  });
  test('澳门特区电子护照', () => {
    expect(ChinesePassport.isValid('MA1234567')).toBe(true);
    expect(ChinesePassport.isValid('MA123456')).toBe(false);
    expect(ChinesePassport.isValid('MA123456E')).toBe(false);
  });
  test('香港特区电子护照', () => {
    expect(ChinesePassport.isValid('K12345678')).toBe(true);
    expect(ChinesePassport.isValid('K1234567')).toBe(false);
    expect(ChinesePassport.isValid('K1234567E')).toBe(false);
  });
  test('因私普通旧护照', () => {
    expect(ChinesePassport.isValid('141234567')).toBe(true);
    expect(ChinesePassport.isValid('151234567')).toBe(true);
    expect(ChinesePassport.isValid('G12345678')).toBe(true);
    expect(ChinesePassport.isValid('14123456')).toBe(false);
    expect(ChinesePassport.isValid('15123456')).toBe(false);
    expect(ChinesePassport.isValid('G1234567')).toBe(false);
    expect(ChinesePassport.isValid('161234567')).toBe(false);
    expect(ChinesePassport.isValid('F12345678')).toBe(false);
  });
  test('因公普通旧护照', () => {
    expect(ChinesePassport.isValid('P1234567')).toBe(true);
    expect(ChinesePassport.isValid('P123456')).toBe(false);
    expect(ChinesePassport.isValid('P12345678')).toBe(false);
    expect(ChinesePassport.isValid('Q1234567')).toBe(false);
  });
  test('公务旧护照', () => {
    expect(ChinesePassport.isValid('S1234567')).toBe(true);
    expect(ChinesePassport.isValid('S12345678')).toBe(true);
    expect(ChinesePassport.isValid('S123456')).toBe(false);
    expect(ChinesePassport.isValid('S123456789')).toBe(false);
    expect(ChinesePassport.isValid('R1234567')).toBe(false);
    expect(ChinesePassport.isValid('R12345678')).toBe(false);
  });
  test('外交旧护照', () => {
    expect(ChinesePassport.isValid('D12345678')).toBe(true);
    expect(ChinesePassport.isValid('D1234567')).toBe(false);
    expect(ChinesePassport.isValid('D123456789')).toBe(false);
    expect(ChinesePassport.isValid('C12345678')).toBe(false);
  });
});

// /**
//  * 单元测试{@link ChinesePassport.validate}。
//  *
//  * @author 胡海星
//  */
// describe('ChinesePassport.validate()', () => {
//   test('undefined', () => {
//     const number = undefined;
//     const r1 = ChinesePassport.validate(number);
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('请输入护照号码');
//     const r2 = ChinesePassport.validate(number, '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('请输入张三的护照号码');
//   });
//   test('null', () => {
//     const number = null;
//     const r1 = ChinesePassport.validate(number);
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('请输入护照号码');
//     const r2 = ChinesePassport.validate(number, '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('请输入张三的护照号码');
//   });
//   test('空字符串', () => {
//     const number = '';
//     const r1 = ChinesePassport.validate(number);
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('请输入护照号码');
//     const r2 = ChinesePassport.validate(number, '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('请输入张三的护照号码');
//   });
//   test('普通电子护照', () => {
//     const r0 = ChinesePassport.validate('E12345678');
//     expect(r0.success).toBe(true);
//     const r1 = ChinesePassport.validate('E1234567');
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('护照号码格式不正确');
//     const r2 = ChinesePassport.validate('E1234567E', '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('张三的护照号码格式不正确');
//   });
//   test('公务护照', () => {
//     const r0 = ChinesePassport.validate('SE1234567');
//     expect(r0.success).toBe(true);
//     const r1 = ChinesePassport.validate('SE123456');
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('护照号码格式不正确');
//     const r2 = ChinesePassport.validate('SEE123456', '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('张三的护照号码格式不正确');
//   });
//   test('外交护照', () => {
//     const r0 = ChinesePassport.validate('DE1234567');
//     expect(r0.success).toBe(true);
//     const r1 = ChinesePassport.validate('DE123456');
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('护照号码格式不正确');
//     const r2 = ChinesePassport.validate('DE123X456', '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('张三的护照号码格式不正确');
//   });
//   test('公务普通护照', () => {
//     const r0 = ChinesePassport.validate('PE1234567');
//     expect(r0.success).toBe(true);
//     const r1 = ChinesePassport.validate('PE123456');
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('护照号码格式不正确');
//     const r2 = ChinesePassport.validate('PE12345678', '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('张三的护照号码格式不正确');
//   });
//   test('澳门特区护照', () => {
//     const r0 = ChinesePassport.validate('MA1234567');
//     expect(r0.success).toBe(true);
//     const r1 = ChinesePassport.validate('MA123456');
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('护照号码格式不正确');
//     const r2 = ChinesePassport.validate('MA123456E', '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('张三的护照号码格式不正确');
//   });
//   test('香港特区护照', () => {
//     const r0 = ChinesePassport.validate('K12345678');
//     expect(r0.success).toBe(true);
//     const r1 = ChinesePassport.validate('K1234567');
//     expect(r1.success).toBe(false);
//     expect(r1.description).toBe('护照号码格式不正确');
//     const r2 = ChinesePassport.validate('K1234567E', '张三');
//     expect(r2.success).toBe(false);
//     expect(r2.description).toBe('张三的护照号码格式不正确');
//   });
// });
