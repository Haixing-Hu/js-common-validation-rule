////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { ChinaPassportRule } from '../../src';

/**
 * 单元测试{@link ChinaPassportRule.isValid}。
 *
 * @author 胡海星
 */
describe('ChinaPassportRule.isValid()', () => {
  test('undefined', () => {
    const number = undefined;
    expect(ChinaPassportRule.isValid(number)).toBe(false);
  });
  test('null', () => {
    expect(ChinaPassportRule.isValid(null)).toBe(false);
  });
  test('empty string', () => {
    expect(ChinaPassportRule.isValid('')).toBe(false);
  });
  test('non string', () => {
    expect(ChinaPassportRule.isValid(123)).toBe(false);
  });
  test('因私普通电子护照', () => {
    expect(ChinaPassportRule.isValid('E12345678')).toBe(true);
    expect(ChinaPassportRule.isValid('EA1234567')).toBe(true);
    expect(ChinaPassportRule.isValid('EZ1234567')).toBe(true);
    expect(ChinaPassportRule.isValid('E1234567')).toBe(false);
    expect(ChinaPassportRule.isValid('E1234567E')).toBe(false);
    expect(ChinaPassportRule.isValid('EA123456')).toBe(false);
    expect(ChinaPassportRule.isValid('EA123456E')).toBe(false);
  });
  test('公务普通电子护照', () => {
    expect(ChinaPassportRule.isValid('PE1234567')).toBe(true);
    expect(ChinaPassportRule.isValid('PE123456')).toBe(false);
    expect(ChinaPassportRule.isValid('PE123456E')).toBe(false);
  });
  test('公务电子护照', () => {
    expect(ChinaPassportRule.isValid('SE1234567')).toBe(true);
    expect(ChinaPassportRule.isValid('SE123456')).toBe(false);
    expect(ChinaPassportRule.isValid('SE123456E')).toBe(false);
  });
  test('外交电子护照', () => {
    expect(ChinaPassportRule.isValid('DE1234567')).toBe(true);
    expect(ChinaPassportRule.isValid('DE123456')).toBe(false);
    expect(ChinaPassportRule.isValid('DE123456E')).toBe(false);
  });
  test('澳门特区电子护照', () => {
    expect(ChinaPassportRule.isValid('MA1234567')).toBe(true);
    expect(ChinaPassportRule.isValid('MA123456')).toBe(false);
    expect(ChinaPassportRule.isValid('MA123456E')).toBe(false);
  });
  test('香港特区电子护照', () => {
    expect(ChinaPassportRule.isValid('K12345678')).toBe(true);
    expect(ChinaPassportRule.isValid('K1234567')).toBe(false);
    expect(ChinaPassportRule.isValid('K1234567E')).toBe(false);
  });
  test('因私普通旧护照', () => {
    expect(ChinaPassportRule.isValid('141234567')).toBe(true);
    expect(ChinaPassportRule.isValid('151234567')).toBe(true);
    expect(ChinaPassportRule.isValid('G12345678')).toBe(true);
    expect(ChinaPassportRule.isValid('14123456')).toBe(false);
    expect(ChinaPassportRule.isValid('15123456')).toBe(false);
    expect(ChinaPassportRule.isValid('G1234567')).toBe(false);
    expect(ChinaPassportRule.isValid('161234567')).toBe(false);
    expect(ChinaPassportRule.isValid('F12345678')).toBe(false);
  });
  test('因公普通旧护照', () => {
    expect(ChinaPassportRule.isValid('P1234567')).toBe(true);
    expect(ChinaPassportRule.isValid('P123456')).toBe(false);
    expect(ChinaPassportRule.isValid('P12345678')).toBe(false);
    expect(ChinaPassportRule.isValid('Q1234567')).toBe(false);
  });
  test('公务旧护照', () => {
    expect(ChinaPassportRule.isValid('S1234567')).toBe(true);
    expect(ChinaPassportRule.isValid('S12345678')).toBe(true);
    expect(ChinaPassportRule.isValid('S123456')).toBe(false);
    expect(ChinaPassportRule.isValid('S123456789')).toBe(false);
    expect(ChinaPassportRule.isValid('R1234567')).toBe(false);
    expect(ChinaPassportRule.isValid('R12345678')).toBe(false);
  });
  test('外交旧护照', () => {
    expect(ChinaPassportRule.isValid('D12345678')).toBe(true);
    expect(ChinaPassportRule.isValid('D1234567')).toBe(false);
    expect(ChinaPassportRule.isValid('D123456789')).toBe(false);
    expect(ChinaPassportRule.isValid('C12345678')).toBe(false);
  });
  test('前后有空白', () => {
    expect(ChinaPassportRule.isValid('  D12345678  ')).toBe(true);
    expect(ChinaPassportRule.isValid('\rS12345678\n')).toBe(true);
    expect(ChinaPassportRule.isValid('    E12345678')).toBe(true);
    expect(ChinaPassportRule.isValid('EA1234567   ')).toBe(true);
  });
});
