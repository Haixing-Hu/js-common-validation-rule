////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { LocalDateTimeRule } from '../../src';

describe('LocalDateTimeRule', () => {
  it('returns true for valid datetime with seconds', () => {
    expect(LocalDateTimeRule.isValid('2023-09-15 14:30:45')).toBe(true);
  });

  it('returns true for valid datetime without seconds', () => {
    expect(LocalDateTimeRule.isValid('2023-09-15 14:30')).toBe(true);
  });

  it('returns true for valid datetime with leading and trailing spaces', () => {
    expect(LocalDateTimeRule.isValid(' 2023-09-15 14:30:45 ')).toBe(true);
  });

  it('returns true for valid datetime with leading zeros in month', () => {
    expect(LocalDateTimeRule.isValid(' 2023-09-15 14:30:45 ')).toBe(true);
  });

  it('returns true for valid datetime with leading zeros in day', () => {
    expect(LocalDateTimeRule.isValid(' 2023-09-05 14:30:45 ')).toBe(true);
  });

  it('returns true for valid datetime with leading zeros in hour', () => {
    expect(LocalDateTimeRule.isValid(' 2023-09-05 00:30:45 ')).toBe(true);
  });

  it('returns true for valid datetime with leading zeros in minute', () => {
    expect(LocalDateTimeRule.isValid(' 2023-09-05 04:00:45 ')).toBe(true);
  });

  it('returns true for valid datetime with leading zeros in second', () => {
    expect(LocalDateTimeRule.isValid(' 2023-09-05 04:00:05 ')).toBe(true);
  });

  it('returns false for invalid datetime format', () => {
    expect(LocalDateTimeRule.isValid('2023/09/15 14:30:45')).toBe(false);
  });

  it('returns false for invalid month', () => {
    expect(LocalDateTimeRule.isValid('2023-13-15 14:30:45')).toBe(false);
  });

  it('returns false for invalid day', () => {
    expect(LocalDateTimeRule.isValid('2023-09-32 14:30:45')).toBe(false);
  });

  it('returns false for invalid hour', () => {
    expect(LocalDateTimeRule.isValid('2023-09-15 25:30:45')).toBe(false);
  });

  it('returns false for invalid minute', () => {
    expect(LocalDateTimeRule.isValid('2023-09-15 14:60:45')).toBe(false);
  });

  it('returns false for invalid second', () => {
    expect(LocalDateTimeRule.isValid('2023-09-15 14:30:60')).toBe(false);
  });

  it('returns false for non-string input', () => {
    expect(LocalDateTimeRule.isValid(20230915143045)).toBe(false);
  });
});
