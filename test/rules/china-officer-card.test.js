////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { ChinaOfficerCardRule } from '../../src';

describe('ChinaOfficerCardRule', () => {
  test('returns true for valid officer card number with 6 characters', () => {
    expect(ChinaOfficerCardRule.isValid('A1B2C3')).toBe(true);
  });

  test('returns true for valid officer card number with 8 characters', () => {
    expect(ChinaOfficerCardRule.isValid('A1B2C3D4')).toBe(true);
  });

  test('returns true for valid officer card number with leading and trailing spaces', () => {
    expect(ChinaOfficerCardRule.isValid(' A1B2C3 ')).toBe(true);
  });

  test('returns false for officer card number shorter than 6 characters', () => {
    expect(ChinaOfficerCardRule.isValid('A1B2')).toBe(false);
  });

  test('returns false for officer card number longer than 8 characters', () => {
    expect(ChinaOfficerCardRule.isValid('A1B2C3D4E')).toBe(false);
  });

  test('returns false for officer card number with special characters', () => {
    expect(ChinaOfficerCardRule.isValid('A1B2C3!@')).toBe(false);
  });

  test('returns false for empty string', () => {
    expect(ChinaOfficerCardRule.isValid('')).toBe(false);
  });

  test('returns false for non-string input', () => {
    expect(ChinaOfficerCardRule.isValid(123456)).toBe(false);
  });

  test('returns true for valid officer card number with only letters', () => {
    expect(ChinaOfficerCardRule.isValid('ABCDEFG')).toBe(true);
  });

  test('returns true for valid officer card number with only numbers', () => {
    expect(ChinaOfficerCardRule.isValid('123456')).toBe(true);
  });
});
