////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { PasswordRule } from '../../src';

describe('PasswordRule', () => {
  it('returns true for valid password', () => {
    expect(PasswordRule.isValid('validPassword123!')).toBe(true);
  });

  it('returns true for valid password of String', () => {
    expect(PasswordRule.isValid(new String('validPassword123!'))).toBe(true);
  });

  it('returns false for password shorter than 6 characters', () => {
    expect(PasswordRule.isValid('abc1!')).toBe(false);
  });

  it('returns false for password longer than 32 characters', () => {
    expect(PasswordRule.isValid('a'.repeat(33))).toBe(false);
  });

  it('returns false for password with invalid characters', () => {
    expect(PasswordRule.isValid('invalid Password{}')).toBe(false);
  });

  it('returns false for non-string input', () => {
    expect(PasswordRule.isValid(123456)).toBe(false);
  });

  it('returns false for null input', () => {
    expect(PasswordRule.isValid(null)).toBe(false);
  });

  it('returns false for undefined input', () => {
    expect(PasswordRule.isValid(undefined)).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(PasswordRule.isValid('')).toBe(false);
  });

  it('returns true for password with special characters', () => {
    expect(PasswordRule.isValid('valid!@#Password')).toBe(true);
  });

  it('returns true for password with only special characters', () => {
    expect(PasswordRule.isValid('!@#$%^&*()_+')).toBe(true);
  });

  it('returns false for password with leading whitespace', () => {
    expect(PasswordRule.isValid(' validPassword123!')).toBe(false);
  });

  it('returns false for password with trailing whitespace', () => {
    expect(PasswordRule.isValid('validPassword123! ')).toBe(false);
  });

  it('returns false for password with internal whitespace', () => {
    expect(PasswordRule.isValid('valid Password123!')).toBe(false);
  });

  it('returns true for password with mixed case letters', () => {
    expect(PasswordRule.isValid('ValidPassword123!')).toBe(true);
  });

  it('returns true for password with digits only', () => {
    expect(PasswordRule.isValid('123456')).toBe(true);
  });

  it('returns true for password with letters only', () => {
    expect(PasswordRule.isValid('abcdef')).toBe(true);
  });

  it('returns true for password with special characters only', () => {
    expect(PasswordRule.isValid('!@#$%^')).toBe(true);
  });
});
