////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { UppercaseAlphaNumberRule } from '../../src';

describe('UppercaseAlphaNumberRule', () => {
  test('returns true for valid uppercase alphanumeric string', () => {
    expect(UppercaseAlphaNumberRule.isValid('A1B2C3')).toBe(true);
  });

  test('returns true for valid uppercase alphanumeric string with leading and trailing spaces', () => {
    expect(UppercaseAlphaNumberRule.isValid('  A1B2C3  ')).toBe(true);
  });

  test('returns false for string with lowercase letters', () => {
    expect(UppercaseAlphaNumberRule.isValid('a1B2C3')).toBe(false);
  });

  test('returns false for string with special characters', () => {
    expect(UppercaseAlphaNumberRule.isValid('A1B2C3!@#')).toBe(false);
  });

  test('returns true for string with only numbers', () => {
    expect(UppercaseAlphaNumberRule.isValid('123456')).toBe(true);
  });

  test('returns true for string with only uppercase letters', () => {
    expect(UppercaseAlphaNumberRule.isValid('ABCDEF')).toBe(true);
  });

  test('returns false for empty string', () => {
    expect(UppercaseAlphaNumberRule.isValid('')).toBe(false);
  });

  test('returns false for non-string input', () => {
    expect(UppercaseAlphaNumberRule.isValid(123456)).toBe(false);
  });

  test('returns false for valid uppercase alphanumeric string with spaces in between', () => {
    expect(UppercaseAlphaNumberRule.isValid('A1 B2 C3')).toBe(false);
  });

  test('returns false for string with mixed case letters', () => {
    expect(UppercaseAlphaNumberRule.isValid('A1b2C3')).toBe(false);
  });
});
