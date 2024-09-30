////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { OtherCredentialRule } from '../../src';

describe('OtherCredentialRule', () => {
  test('returns true for valid credential number with letters and numbers', () => {
    expect(OtherCredentialRule.isValid('A1B2C3')).toBe(true);
  });

  test('returns true for valid credential number with letters, numbers, and periods', () => {
    expect(OtherCredentialRule.isValid('A1.B2.C3')).toBe(true);
  });

  test('returns true for valid credential number with leading and trailing spaces', () => {
    expect(OtherCredentialRule.isValid(' A1B2C3 ')).toBe(true);
  });

  test('returns false for credential number shorter than 2 characters', () => {
    expect(OtherCredentialRule.isValid('A')).toBe(false);
  });

  test('returns false for credential number longer than 60 characters', () => {
    expect(OtherCredentialRule.isValid('A'.repeat(61))).toBe(false);
  });

  test('returns false for credential number with special characters', () => {
    expect(OtherCredentialRule.isValid('A1B2C3!@#')).toBe(false);
  });

  test('returns false for empty string', () => {
    expect(OtherCredentialRule.isValid('')).toBe(false);
  });

  test('returns false for non-string input', () => {
    expect(OtherCredentialRule.isValid(123456)).toBe(false);
  });

  test('returns true for valid credential number with only letters', () => {
    expect(OtherCredentialRule.isValid('ABCDEF')).toBe(true);
  });

  test('returns true for valid credential number with only numbers', () => {
    expect(OtherCredentialRule.isValid('123456')).toBe(true);
  });
});
