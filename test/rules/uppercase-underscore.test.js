////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { UppercaseUnderscoreRule } from '../../src';

describe('UppercaseUnderscoreRule', () => {
  test('returns true for valid uppercase underscore string', () => {
    expect(UppercaseUnderscoreRule.isValid('USER_NAME')).toBe(true);
  });

  test('returns true for valid uppercase underscore string with leading and trailing spaces', () => {
    expect(UppercaseUnderscoreRule.isValid('  USER_NAME  ')).toBe(true);
  });

  test('returns true for string with only uppercase letters', () => {
    expect(UppercaseUnderscoreRule.isValid('USERNAME')).toBe(true);
  });

  test('returns true for string with only underscores', () => {
    expect(UppercaseUnderscoreRule.isValid('_USER_')).toBe(true);
  });

  test('returns true for string with uppercase letters, numbers and underscores', () => {
    expect(UppercaseUnderscoreRule.isValid('USER_123_NAME')).toBe(true);
  });

  test('returns false for string with lowercase letters', () => {
    expect(UppercaseUnderscoreRule.isValid('user_name')).toBe(false);
  });

  test('returns false for string with mixed case letters', () => {
    expect(UppercaseUnderscoreRule.isValid('User_Name')).toBe(false);
  });

  test('returns false for string with special characters', () => {
    expect(UppercaseUnderscoreRule.isValid('USER_NAME!@#')).toBe(false);
  });

  test('returns false for string with spaces in between', () => {
    expect(UppercaseUnderscoreRule.isValid('USER NAME')).toBe(false);
  });

  test('returns false for string with hyphens', () => {
    expect(UppercaseUnderscoreRule.isValid('USER-NAME')).toBe(false);
  });

  test('returns false for empty string', () => {
    expect(UppercaseUnderscoreRule.isValid('')).toBe(false);
  });

  test('returns false for non-string input', () => {
    expect(UppercaseUnderscoreRule.isValid(123456)).toBe(false);
  });

  test('returns false for null input', () => {
    expect(UppercaseUnderscoreRule.isValid(null)).toBe(false);
  });

  test('returns false for undefined input', () => {
    expect(UppercaseUnderscoreRule.isValid(undefined)).toBe(false);
  });

  test('returns true for single uppercase letter', () => {
    expect(UppercaseUnderscoreRule.isValid('A')).toBe(true);
  });

  test('returns true for single underscore', () => {
    expect(UppercaseUnderscoreRule.isValid('_')).toBe(true);
  });

  test('returns true for string starting with underscore', () => {
    expect(UppercaseUnderscoreRule.isValid('_USER')).toBe(true);
  });

  test('returns true for string ending with underscore', () => {
    expect(UppercaseUnderscoreRule.isValid('USER_')).toBe(true);
  });

  test('returns true for string with consecutive underscores', () => {
    expect(UppercaseUnderscoreRule.isValid('USER__NAME')).toBe(true);
  });
});
