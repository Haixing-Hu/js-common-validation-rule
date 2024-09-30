////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { VerifyCodeRule } from '../../src';

describe('VerifyCodeRule', () => {
  test('returns true for valid verify code of default length', () => {
    expect(VerifyCodeRule.isValid('123456')).toBe(true);
  });

  test('returns true for valid verify code of specified length', () => {
    expect(VerifyCodeRule.isValid('1234', 4)).toBe(true);
  });

  test('returns false for verify code with non-digit characters', () => {
    expect(VerifyCodeRule.isValid('123a56')).toBe(false);
  });

  test('returns false for verify code shorter than default length', () => {
    expect(VerifyCodeRule.isValid('12345')).toBe(false);
  });

  test('returns false for verify code longer than default length', () => {
    expect(VerifyCodeRule.isValid('1234567')).toBe(false);
  });

  test('returns false for verify code shorter than specified length', () => {
    expect(VerifyCodeRule.isValid('123', 4)).toBe(false);
  });

  test('returns false for verify code longer than specified length', () => {
    expect(VerifyCodeRule.isValid('12345', 4)).toBe(false);
  });

  test('returns true for verify code equal to the specified length', () => {
    expect(VerifyCodeRule.isValid('1234', 4)).toBe(true);
  });

  test('returns false for non-string input', () => {
    expect(VerifyCodeRule.isValid(123456)).toBe(false);
  });

  test('returns false for empty string', () => {
    expect(VerifyCodeRule.isValid('')).toBe(false);
  });

  test('returns false for valid verify code with leading and trailing spaces', () => {
    expect(VerifyCodeRule.isValid(' 123456 ')).toBe(false);
  });
});
