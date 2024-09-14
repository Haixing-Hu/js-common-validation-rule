////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { AlphaNumberRule } from '../../src';

/**
 * 单元测试{@link AlphaNumberRule.isValid}。
 *
 * @author 胡海星
 */
describe('AlphaNumberRule.isValid()', () => {
  test('undefined', () => {
    const str = undefined;
    expect(AlphaNumberRule.isValid(str)).toBe(false);
  });
  test('null', () => {
    const str = null;
    expect(AlphaNumberRule.isValid(str)).toBe(false);
  });
  test('empty string', () => {
    const str = '';
    expect(AlphaNumberRule.isValid(str)).toBe(false);
  });
  test('non string', () => {
    const str = 123;
    expect(AlphaNumberRule.isValid(str)).toBe(false);
  });
  test('"abc123"', () => {
    const str = 'abc123';
    expect(AlphaNumberRule.isValid(str)).toBe(true);
  });
  test('"123"', () => {
    const str = '123';
    expect(AlphaNumberRule.isValid(str)).toBe(true);
  });
  test('"  12a3 "', () => {
    const str = '  12a3 ';
    expect(AlphaNumberRule.isValid(str)).toBe(true);
  });
  test('"  12-a3 "', () => {
    const str = '  12-a3 ';
    expect(AlphaNumberRule.isValid(str)).toBe(false);
  });
});
