////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { NumberRule } from '../../src';

/**
  * 单元测试{@link NumberRule.isValid}。
  *
  * @author 胡海星
  */
describe('NumberRule.isValid()', () => {
  test('undefined', () => {
    const value = undefined;
    expect(NumberRule.isValid(value)).toBe(false);
  });
  test('null', () => {
    const value = null;
    expect(NumberRule.isValid(value)).toBe(false);
  });
  test('empty valueing', () => {
    const value = '';
    expect(NumberRule.isValid(value)).toBe(false);
  });
  test('"123 "', () => {
    const value = '123 ';
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('"  +123"', () => {
    const value = '  +123';
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('"  -123  "', () => {
    const value = '  -123  ';
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('"  123.4 "', () => {
    const value = '  123.4 ';
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('"   123. "', () => {
    const value = '   123. ';
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('"\f +123.4\n"', () => {
    const value = '\f +123.4\n';
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('" .123"', () => {
    const value = ' .123';
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('"-123."', () => {
    const value = '-123.';
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('"+123."', () => {
    const value = '+123.';
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('"123.345e2"', () => {
    const value = '123.345e2';
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('"123.345e-2"', () => {
    const value = '123.345e-2';
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('"123.345e+23"', () => {
    const value = '123.345e+23';
    expect(NumberRule.isValid(value)).toBe(true);
  });

  test('"+"', () => {
    const value = '+';
    expect(NumberRule.isValid(value)).toBe(false);
  });
  test('"-"', () => {
    const value = '-';
    expect(NumberRule.isValid(value)).toBe(false);
  });
  test('"12a3"', () => {
    const value = '12a3';
    expect(NumberRule.isValid(value)).toBe(false);
  });
  test('"#123"', () => {
    const value = '#123';
    expect(NumberRule.isValid(value)).toBe(false);
  });
  test('"12039485897233498274329483948310984321094732198574634598430958."', () => {
    const value = '12039485897233498274329483948310984321094732198574634598430958.';
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('"-1203948589723349827432948394831098432.1094732198574634598430958"', () => {
    const value = '-1203948589723349827432948394831098432.1094732198574634598430958';
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('"- 12039485897233498274329483948310984321094732198574634598430958"', () => {
    const value = '- 12039485897233498274329483948310984321094732198574634598430958';
    expect(NumberRule.isValid(value)).toBe(false);
  });
  test('" NaN ", option.allowNaN = false', () => {
    const value = ' NaN ';
    expect(NumberRule.isValid(value)).toBe(false);
  });
  test('" NaN ", option.allowNaN = true', () => {
    const value = ' NaN ';
    expect(NumberRule.isValid(value, { allowNaN: true })).toBe(true);
  });
  test('" Nan ", option.allowNaN = true', () => {
    const value = ' Nan ';
    expect(NumberRule.isValid(value, { allowNaN: true })).toBe(false);
  });
  test('" Infinity ", option.allowInfinity = false', () => {
    const value = ' Infinity ';
    expect(NumberRule.isValid(value)).toBe(false);
  });
  test('" Infinity ", option.allowInfinity = true', () => {
    const value = ' Infinity ';
    expect(NumberRule.isValid(value, { allowInfinity: true })).toBe(true);
  });
  test('" infinity ", option.allowInfinity = true', () => {
    const value = ' infinity ';
    expect(NumberRule.isValid(value, { allowInfinity: true })).toBe(false);
  });
  test('" NaN ", option.allowNaN = true, option.allowInfinity = true', () => {
    const value = ' NaN ';
    expect(NumberRule.isValid(value, { allowNaN: true, allowInfinity: true })).toBe(true);
  });
  test('" Infinity ", option.allowNaN = true, option.allowInfinity = true', () => {
    const value = ' Infinity ';
    expect(NumberRule.isValid(value, { allowNaN: true, allowInfinity: true })).toBe(true);
  });
  test('non valueing, non numeric', () => {
    const value = true;
    expect(NumberRule.isValid(value)).toBe(false);
  });
  test('number, integer', () => {
    const value = 123;
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('number, float', () => {
    const value = 123e-2;
    expect(NumberRule.isValid(value)).toBe(true);
  });
  test('number, NaN', () => {
    expect(NumberRule.isValid(NaN)).toBe(false);
  });
  test('number, infinity', () => {
    expect(NumberRule.isValid(Infinity)).toBe(false);
    expect(NumberRule.isValid(-Infinity)).toBe(false);
  });
  test('number, NaN, allowNaN', () => {
    expect(NumberRule.isValid(NaN, { allowNaN: true })).toBe(true);
  });
  test('number, infinity, allowInfinity', () => {
    expect(NumberRule.isValid(Infinity, { allowInfinity: true })).toBe(true);
    expect(NumberRule.isValid(-Infinity, { allowInfinity: true })).toBe(true);
  });
  test('bigint', () => {
    const value = 123n;
    expect(NumberRule.isValid(value)).toBe(false);
  });
});
