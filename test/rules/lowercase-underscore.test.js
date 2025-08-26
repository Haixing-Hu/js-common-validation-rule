////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { LowercaseUnderscoreRule } from '../../src';

describe('LowercaseUnderscoreRule', () => {
  test('returns true for valid lowercase underscore string', () => {
    expect(LowercaseUnderscoreRule.isValid('user_name')).toBe(true);
  });

  test('returns true for valid lowercase underscore string with leading and trailing spaces', () => {
    expect(LowercaseUnderscoreRule.isValid('  user_name  ')).toBe(true);
  });

  test('returns true for string with only lowercase letters', () => {
    expect(LowercaseUnderscoreRule.isValid('username')).toBe(true);
  });

  test('returns true for string with only numbers', () => {
    expect(LowercaseUnderscoreRule.isValid('123_456')).toBe(true);
  });

  test('returns true for string with lowercase letters, numbers and underscores', () => {
    expect(LowercaseUnderscoreRule.isValid('user_123_name')).toBe(true);
  });

  test('returns false for string with uppercase letters', () => {
    expect(LowercaseUnderscoreRule.isValid('User_Name')).toBe(false);
  });

  test('returns false for string with mixed case letters', () => {
    expect(LowercaseUnderscoreRule.isValid('user_Name')).toBe(false);
  });

  test('returns false for string with special characters', () => {
    expect(LowercaseUnderscoreRule.isValid('user_name!@#')).toBe(false);
  });

  test('returns false for string with spaces in between', () => {
    expect(LowercaseUnderscoreRule.isValid('user name')).toBe(false);
  });

  test('returns false for string with hyphens', () => {
    expect(LowercaseUnderscoreRule.isValid('user-name')).toBe(false);
  });

  test('returns false for empty string', () => {
    expect(LowercaseUnderscoreRule.isValid('')).toBe(false);
  });

  test('returns false for non-string input', () => {
    expect(LowercaseUnderscoreRule.isValid(123456)).toBe(false);
  });

  test('returns false for null input', () => {
    expect(LowercaseUnderscoreRule.isValid(null)).toBe(false);
  });

  test('returns false for undefined input', () => {
    expect(LowercaseUnderscoreRule.isValid(undefined)).toBe(false);
  });

  test('returns true for single lowercase letter', () => {
    expect(LowercaseUnderscoreRule.isValid('a')).toBe(true);
  });

  test('returns true for single number', () => {
    expect(LowercaseUnderscoreRule.isValid('1')).toBe(true);
  });

  test('returns true for single underscore', () => {
    expect(LowercaseUnderscoreRule.isValid('_')).toBe(true);
  });

  test('returns true for string starting with underscore', () => {
    expect(LowercaseUnderscoreRule.isValid('_user')).toBe(true);
  });

  test('returns true for string ending with underscore', () => {
    expect(LowercaseUnderscoreRule.isValid('user_')).toBe(true);
  });

  test('returns true for string with consecutive underscores', () => {
    expect(LowercaseUnderscoreRule.isValid('user__name')).toBe(true);
  });
});
