////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { EmailRule } from '../../src';

describe('EmailRule', () => {
  test('returns true for valid email address', () => {
    expect(EmailRule.isValid('test@example.com')).toBe(true);
  });

  test('returns true for valid email address with leading and trailing spaces', () => {
    expect(EmailRule.isValid('  test@example.com  ')).toBe(true);
  });

  test('returns false for email address without "@" symbol', () => {
    expect(EmailRule.isValid('testexample.com')).toBe(false);
  });

  test('returns false for email address without domain', () => {
    expect(EmailRule.isValid('test@')).toBe(false);
  });

  test('returns false for email address with invalid characters', () => {
    expect(EmailRule.isValid('test@exa!mple.com')).toBe(false);
  });

  test('returns false for email address with multiple "@" symbols', () => {
    expect(EmailRule.isValid('test@@example.com')).toBe(false);
  });

  test('returns false for email address with spaces in between', () => {
    expect(EmailRule.isValid('test@ example.com')).toBe(false);
  });

  test('returns false for empty string', () => {
    expect(EmailRule.isValid('')).toBe(false);
  });

  test('returns false for non-string input', () => {
    expect(EmailRule.isValid(123456)).toBe(false);
  });

  test('returns false for email address with missing local part', () => {
    expect(EmailRule.isValid('@example.com')).toBe(false);
  });
});
