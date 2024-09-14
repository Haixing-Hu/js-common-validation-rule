////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { LocalDateRule } from '../../src';

/**
 * 单元测试{@link LocalDateRule.isValid}。
 *
 * @author 胡海星
 */
describe('LocalDateRule.isValid()', () => {
  test('undefined', () => {
    const str = undefined;
    expect(LocalDateRule.isValid(str)).toBe(false);
  });
  test('null', () => {
    const str = null;
    expect(LocalDateRule.isValid(str)).toBe(false);
  });
  test('empty string', () => {
    const str = '';
    expect(LocalDateRule.isValid(str)).toBe(false);
    expect(LocalDateRule.isValid(new String(str))).toBe(false);
  });
  test('non string', () => {
    const str = 123;
    expect(LocalDateRule.isValid(str)).toBe(false);
  });
  test('"123 "', () => {
    const str = '123';
    expect(LocalDateRule.isValid(str)).toBe(false);
    expect(LocalDateRule.isValid(new String(str))).toBe(false);
  });
  test('" 2021-01-12"', () => {
    const str = ' 2021-01-31';
    expect(LocalDateRule.isValid(str)).toBe(true);
    expect(LocalDateRule.isValid(new String(str))).toBe(true);
  });
  test('" 2021-1-1 "', () => {
    const str = ' 2021-1-1 ';
    expect(LocalDateRule.isValid(str)).toBe(true);
    expect(LocalDateRule.isValid(new String(str))).toBe(true);
  });
  test('" 21-1-1 "', () => {
    const str = ' 21-1-1 ';
    expect(LocalDateRule.isValid(str)).toBe(false);
    expect(LocalDateRule.isValid(new String(str))).toBe(false);
  });
  test('Date', () => {
    const value = new Date();
    expect(LocalDateRule.isValid(value)).toBe(true);
  });
  test('boolean', () => {
    expect(LocalDateRule.isValid(true)).toBe(false);
  });
  test('number', () => {
    expect(LocalDateRule.isValid(123)).toBe(false);
  });
  test('RegExp', () => {
    expect(LocalDateRule.isValid(/.*/)).toBe(false);
  });
});
