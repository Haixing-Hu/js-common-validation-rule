////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { ChinaIdentityCardRule } from '../../src';

describe('ChineseIdentityCard.isValid()', () => {
  test('undefined', () => {
    expect(ChinaIdentityCardRule.isValid()).toBe(false);
  });
  test('null', () => {
    expect(ChinaIdentityCardRule.isValid(null)).toBe(false);
  });
  test('empty string', () => {
    expect(ChinaIdentityCardRule.isValid('')).toBe(false);
  });
  test('non string', () => {
    expect(ChinaIdentityCardRule.isValid(123)).toBe(false);
  });
  test('正确的身份证号码', () => {
    expect(ChinaIdentityCardRule.isValid('110101199003078515')).toBe(true);
  });
  test('正确的身份证号码，前后有空白字符', () => {
    expect(ChinaIdentityCardRule.isValid(' \r110101199003078515 \n\f ')).toBe(true);
  });
  test('错误的身份证号码', () => {
    expect(ChinaIdentityCardRule.isValid('110101199003078516')).toBe(false);
  });
  test('正确的身份证号码', () => {
    expect(ChinaIdentityCardRule.isValid('11010119900307133X')).toBe(true);
  });
  test('440601开头身份证号码', () => {
    expect(ChinaIdentityCardRule.isValid('440601195404110016')).toBe(true);
  });
  test('320219197706225525', () => {
    expect(ChinaIdentityCardRule.isValid('320219197706225525')).toBe(true);
  });

  test('320601199005030327', () => {
    expect(ChinaIdentityCardRule.isValid('320601199005030327')).toBe(true);
  });
  test('屏蔽区号验证', () => {
    expect(ChinaIdentityCardRule.isValid('100000199005030327')).toBe(true);
  });
  test('屏蔽区号验证2', () => {
    expect(ChinaIdentityCardRule.isValid('320401198906143120')).toBe(true);
  });
  test('身份证号码位数错误', () => {
    expect(ChinaIdentityCardRule.isValid('3402221993090663308')).toBe(false);
  });
  // TODO：补充以下几类测试样例，错误的行政区编码，错误的生日，生日超过今天，错误的校验码
  // TODO: 补充以下几类测试样例，已经过期的行政区编码
});

describe('ChinaIdentityCardRule.getGender()', () => {
  test('returns MALE for valid male ID card number', () => {
    expect(ChinaIdentityCardRule.getGender('110101199003078515')).toBe('MALE');
  });

  test('returns MALE for valid male ID card number with leading and trailing spaces', () => {
    expect(ChinaIdentityCardRule.getGender(' 110101199003078515  ')).toBe('MALE');
  });

  test('returns FEMALE for valid female ID card number', () => {
    expect(ChinaIdentityCardRule.getGender('110101199003078524')).toBe('FEMALE');
  });

  test('returns MALE for invalid ID card number', () => {
    expect(ChinaIdentityCardRule.getGender('11010119900307853X')).toBe('MALE');
  });

  test('returns null for non-string input', () => {
    expect(ChinaIdentityCardRule.getGender(123456)).toBeNull();
  });

  test('returns null for empty string', () => {
    expect(ChinaIdentityCardRule.getGender('')).toBeNull();
  });
});

describe('ChinaIdentityCardRule.getBirthday()', () => {
  test('returns correct birthday for valid ID card number', () => {
    expect(ChinaIdentityCardRule.getBirthday('110101199003078515')).toBe('1990-03-07');
  });

  test('returns correct birthday for valid ID card number with leading/trailing spaces', () => {
    expect(ChinaIdentityCardRule.getBirthday(' 110101199003078515  ')).toBe('1990-03-07');
  });

  test('returns correct birthday for invalid ID card number', () => {
    expect(ChinaIdentityCardRule.getBirthday('11010119900307852X')).toBe('1990-03-07');
  });

  test('returns null for non-string input', () => {
    expect(ChinaIdentityCardRule.getBirthday(123456)).toBeNull();
  });

  test('returns null for empty string', () => {
    expect(ChinaIdentityCardRule.getBirthday('')).toBeNull();
  });
});
