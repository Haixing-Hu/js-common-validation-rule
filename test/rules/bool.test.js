////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { BoolRule } from '../../src';

/**
 * 单元测试{@link BoolRule.isValid}。
 *
 * @author 胡海星
 */
describe('BoolRule.isValid()', () => {
  test('undefined', () => {
    const str = undefined;
    expect(BoolRule.isValid(str)).toBe(false);
  });
  test('null', () => {
    const str = null;
    expect(BoolRule.isValid(str)).toBe(false);
  });
  test('empty string', () => {
    const str = '';
    expect(BoolRule.isValid(str)).toBe(false);
  });
  test('non string', () => {
    const str = 123;
    expect(BoolRule.isValid(str)).toBe(false);
  });
  test('"123 "', () => {
    const str = '123';
    expect(BoolRule.isValid(str)).toBe(false);
  });
  test('"true "', () => {
    const str = 'true ';
    expect(BoolRule.isValid(str)).toBe(true);
  });
  test('" false "', () => {
    const str = ' false ';
    expect(BoolRule.isValid(str)).toBe(true);
  });
  test('" tRue "', () => {
    const str = ' tRue ';
    expect(BoolRule.isValid(str)).toBe(true);
  });
  test('" fALse "', () => {
    const str = ' fALse ';
    expect(BoolRule.isValid(str)).toBe(true);
  });
  test('" xxx "', () => {
    const str = ' xxx ';
    expect(BoolRule.isValid(str)).toBe(false);
  });
  test('" true. "', () => {
    const str = ' true. ';
    expect(BoolRule.isValid(str)).toBe(false);
  });
  test('valid for boolean primitive', () => {
    const str = true;
    expect(BoolRule.isValid(str)).toBe(true);
  });
  test('valid for boolean wrapper object', () => {
    const str = new Boolean(true);
    expect(BoolRule.isValid(str)).toBe(true);
  });
});
