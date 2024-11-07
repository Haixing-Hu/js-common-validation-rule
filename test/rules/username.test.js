////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { UsernameRule } from '../../src';

describe('UsernameRule', () => {
  it('returns true for valid username', () => {
    expect(UsernameRule.isValid('validUsername')).toBe(true);
  });

  it('returns true for valid username of a String object', () => {
    expect(UsernameRule.isValid(new String('validUsername'))).toBe(true);
  });

  it('returns true for valid username with @', () => {
    expect(UsernameRule.isValid('valid@username')).toBe(true);
  });


  it('returns false for username starting with a number', () => {
    expect(UsernameRule.isValid('1invalidUsername')).toBe(false);
  });

  it('returns false for username starting with an underscore', () => {
    expect(UsernameRule.isValid('_invalidUsername')).toBe(false);
  });

  it('returns false for username with invalid characters', () => {
    expect(UsernameRule.isValid('invalid Username')).toBe(false);
  });

  it('returns false for username shorter than 4 characters', () => {
    expect(UsernameRule.isValid('abc')).toBe(false);
  });

  it('returns false for username longer than 32 characters', () => {
    expect(UsernameRule.isValid('a'.repeat(33))).toBe(false);
  });

  it('returns false for non-string input', () => {
    expect(UsernameRule.isValid(12345)).toBe(false);
  });

  it('returns false for null input', () => {
    expect(UsernameRule.isValid(null)).toBe(false);
  });

  it('returns false for undefined input', () => {
    expect(UsernameRule.isValid(undefined)).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(UsernameRule.isValid('')).toBe(false);
  });

  it('returns true for username with dots, underscores, and hyphens', () => {
    expect(UsernameRule.isValid('valid.username_with-hyphens')).toBe(true);
  });
});
