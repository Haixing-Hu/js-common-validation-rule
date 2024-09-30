////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { LocalTimeRule } from '../../src';

describe('LocalTimeRule', () => {
  it('returns true for valid time with seconds', () => {
    expect(LocalTimeRule.isValid('14:30:45')).toBe(true);
  });

  it('returns true for valid time without seconds', () => {
    expect(LocalTimeRule.isValid('14:30')).toBe(true);
  });

  it('returns true for valid time with leading and trailing spaces', () => {
    expect(LocalTimeRule.isValid(' 14:30:45 ')).toBe(true);
  });

  it('returns true for valid time with leading zeros', () => {
    expect(LocalTimeRule.isValid(' 04:09:00 ')).toBe(true);
  });

  it('returns true for valid time with all zeros', () => {
    expect(LocalTimeRule.isValid(' 00:00:00 ')).toBe(true);
  });

  it('returns false for invalid time format', () => {
    expect(LocalTimeRule.isValid('14-30-45')).toBe(false);
  });

  it('returns false for invalid hour', () => {
    expect(LocalTimeRule.isValid('25:30:45')).toBe(false);
  });

  it('returns false for invalid minute', () => {
    expect(LocalTimeRule.isValid('14:60:45')).toBe(false);
  });

  it('returns false for invalid second', () => {
    expect(LocalTimeRule.isValid('14:30:60')).toBe(false);
  });

  it('returns false for non-string input', () => {
    expect(LocalTimeRule.isValid(143045)).toBe(false);
  });

  it('returns true for single digit hour and minute', () => {
    expect(LocalTimeRule.isValid('2:3')).toBe(true);
  });

  it('returns true for single digit hour, minute, and second', () => {
    expect(LocalTimeRule.isValid('2:3:4')).toBe(true);
  });
});
