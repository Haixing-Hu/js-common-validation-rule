////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { IntegerRule } from '../../src';

/**
 * 单元测试{@link IntegerRule.isValid}。
 *
 * @author 胡海星
 */
describe('IntegerRule.isValid()', () => {
  test('undefined', () => {
    const value = undefined;
    expect(IntegerRule.isValid(value)).toBe(false);
  });
  test('null', () => {
    const value = null;
    expect(IntegerRule.isValid(value)).toBe(false);
  });
  test('empty valueing', () => {
    const value = '';
    expect(IntegerRule.isValid(value)).toBe(false);
  });
  test('integer number', () => {
    const value = 123;
    expect(IntegerRule.isValid(value)).toBe(true);
  });
  test('bigint', () => {
    const value = 123n;
    expect(IntegerRule.isValid(value)).toBe(true);
  });
  test('float number', () => {
    const value = 123.12;
    expect(IntegerRule.isValid(value)).toBe(false);
  });
  test(' boolean ', () => {
    const value = true;
    expect(IntegerRule.isValid(value)).toBe(false);
  });
  test('"123 "', () => {
    const value = '123';
    expect(IntegerRule.isValid(value)).toBe(true);
  });
  test('"123. "', () => {
    const value = '123. ';
    expect(IntegerRule.isValid(value)).toBe(false);
  });
  test('"  +123 "', () => {
    const value = '  +123 ';
    expect(IntegerRule.isValid(value)).toBe(true);
  });
  test('"  -123"', () => {
    const value = '  -123';
    expect(IntegerRule.isValid(value)).toBe(true);
  });
  test('"+"', () => {
    const value = '+';
    expect(IntegerRule.isValid(value)).toBe(false);
  });
  test('"-"', () => {
    const value = '-';
    expect(IntegerRule.isValid(value)).toBe(false);
  });
  test('"12a3  "', () => {
    const value = '12a3  ';
    expect(IntegerRule.isValid(value)).toBe(false);
  });
  test('  #123', () => {
    const value = '  #123';
    expect(IntegerRule.isValid(value)).toBe(false);
  });
  test('"  12039485897233498274329483948310984321094732198574634598430958"', () => {
    const value = '  12039485897233498274329483948310984321094732198574634598430958';
    expect(IntegerRule.isValid(value)).toBe(true);
  });
  test('" -12039485897233498274329483948310984321094732198574634598430958"', () => {
    const value = ' -12039485897233498274329483948310984321094732198574634598430958';
    expect(IntegerRule.isValid(value)).toBe(true);
  });
  test(' - 12039485897233498274329483948310984321094732198574634598430958', () => {
    const value = ' - 12039485897233498274329483948310984321094732198574634598430958';
    expect(IntegerRule.isValid(value)).toBe(false);
  });
});
