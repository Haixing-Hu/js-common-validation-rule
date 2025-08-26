////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { LowercaseHyphenRule } from '../../src';

describe('LowercaseHyphenRule', () => {
  test('returns true for valid lowercase hyphen string', () => {
    expect(LowercaseHyphenRule.isValid('user-name')).toBe(true);
  });

  test('returns true for valid lowercase hyphen string with leading and trailing spaces', () => {
    expect(LowercaseHyphenRule.isValid('  user-name  ')).toBe(true);
  });

  test('returns true for string with only lowercase letters', () => {
    expect(LowercaseHyphenRule.isValid('username')).toBe(true);
  });

  test('returns true for string with only numbers', () => {
    expect(LowercaseHyphenRule.isValid('123-456')).toBe(true);
  });

  test('returns true for string with lowercase letters, numbers and hyphens', () => {
    expect(LowercaseHyphenRule.isValid('user-123-name')).toBe(true);
  });

  test('returns false for string with uppercase letters', () => {
    expect(LowercaseHyphenRule.isValid('User-Name')).toBe(false);
  });

  test('returns false for string with mixed case letters', () => {
    expect(LowercaseHyphenRule.isValid('user-Name')).toBe(false);
  });

  test('returns false for string with special characters', () => {
    expect(LowercaseHyphenRule.isValid('user-name!@#')).toBe(false);
  });

  test('returns false for string with spaces in between', () => {
    expect(LowercaseHyphenRule.isValid('user name')).toBe(false);
  });

  test('returns false for string with underscores', () => {
    expect(LowercaseHyphenRule.isValid('user_name')).toBe(false);
  });

  test('returns false for empty string', () => {
    expect(LowercaseHyphenRule.isValid('')).toBe(false);
  });

  test('returns false for non-string input', () => {
    expect(LowercaseHyphenRule.isValid(123456)).toBe(false);
  });

  test('returns false for null input', () => {
    expect(LowercaseHyphenRule.isValid(null)).toBe(false);
  });

  test('returns false for undefined input', () => {
    expect(LowercaseHyphenRule.isValid(undefined)).toBe(false);
  });

  test('returns true for single lowercase letter', () => {
    expect(LowercaseHyphenRule.isValid('a')).toBe(true);
  });

  test('returns true for single number', () => {
    expect(LowercaseHyphenRule.isValid('1')).toBe(true);
  });

  test('returns true for single hyphen', () => {
    expect(LowercaseHyphenRule.isValid('-')).toBe(true);
  });

  test('returns true for string starting with hyphen', () => {
    expect(LowercaseHyphenRule.isValid('-user')).toBe(true);
  });

  test('returns true for string ending with hyphen', () => {
    expect(LowercaseHyphenRule.isValid('user-')).toBe(true);
  });

  test('returns true for string with consecutive hyphens', () => {
    expect(LowercaseHyphenRule.isValid('user--name')).toBe(true);
  });
});
