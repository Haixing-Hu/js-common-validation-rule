////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { PersonNameRule } from '../../src';

/**
 * 单元测试{@link PersonNameRule.isValid}。
 *
 * @author 胡海星
 */
describe('PersonNameRule.isValid()', () => {
  test('undefined', () => {
    const str = undefined;
    expect(PersonNameRule.isValid(str)).toBe(false);
  });
  test('null', () => {
    const str = null;
    expect(PersonNameRule.isValid(str)).toBe(false);
  });
  test('non string', () => {
    const str = 123;
    expect(PersonNameRule.isValid(str)).toBe(false);
  });
  test('empty string', () => {
    const str = '';
    expect(PersonNameRule.isValid(str)).toBe(false);
  });
  test('正常名字', () => {
    expect(PersonNameRule.isValid('张三')).toBe(true);
  });
  test('少于2个汉字', () => {
    expect(PersonNameRule.isValid('张')).toBe(false);
  });
  test('中文中加空格', () => {
    expect(PersonNameRule.isValid('张 三')).toBe(false);
  });
  test('30个汉字的中文', () => {
    expect(PersonNameRule.isValid('张张张张张张张张张张张张张张张张张张张张张张张张张张张张张张')).toBe(true);
  });
  test('超过30个汉字的中文', () => {
    expect(PersonNameRule.isValid('张张张张张张张张张张张张张张张张张张张张张张张张张张张张张张张')).toBe(false);
  });
  test('带有外文名中间点', () => {
    expect(PersonNameRule.isValid('阿凡提·穆罕穆德·买买提')).toBe(true);
  });
  test('开头加中间点', () => {
    expect(PersonNameRule.isValid('·穆罕穆德·买买提')).toBe(false);
  });
  test('结尾加中间点', () => {
    expect(PersonNameRule.isValid('阿凡提·穆罕穆德·')).toBe(false);
  });
  test('带有句点', () => {
    expect(PersonNameRule.isValid('阿凡提.穆罕穆德.买买提')).toBe(true);
  });
  test('开头加句点', () => {
    expect(PersonNameRule.isValid('.穆罕穆德.买买提')).toBe(false);
  });
  test('结尾加句点', () => {
    expect(PersonNameRule.isValid('阿凡提.穆罕穆德.')).toBe(false);
  });
  test('姓名中包含生僻汉字(CJK Unified Ideographs Extension A)', () => {
    expect(PersonNameRule.isValid('䶮㐑㐒㐓㐔㐕')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Unified Ideographs Extension B)', () => {
    expect(PersonNameRule.isValid('𠁆𠀾𠃵')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Unified Ideographs Extension C)', () => {
    expect(PersonNameRule.isValid('𪣻𪧦𪩘')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Unified Ideographs Extension D)', () => {
    expect(PersonNameRule.isValid('𫞔𫝚𫞂')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Unified Ideographs Extension E)', () => {
    expect(PersonNameRule.isValid('𫢸𫫇𫭢')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Unified Ideographs Extension F)', () => {
    expect(PersonNameRule.isValid('𮉸𮉸𮉸')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Compatibility Ideographs)', () => {
    expect(PersonNameRule.isValid('賈滑串句龜綠')).toBe(true);
  });
  test('姓名中包含生僻汉字(CJK Compatibility Ideographs Supplement)', () => {
    expect(PersonNameRule.isValid('娧姘婦㛮')).toBe(true);
  });
  test('英文或拼音，中间有空格', () => {
    expect(PersonNameRule.isValid('Bill Gates')).toBe(true);
  });
  test('英文或拼音全大写', () => {
    expect(PersonNameRule.isValid('ZHANG SAN')).toBe(true);
  });
  test('英文或拼音全小写', () => {
    expect(PersonNameRule.isValid('zhang san')).toBe(true);
  });
  test('英文或拼音大小写混杂', () => {
    expect(PersonNameRule.isValid('Zhang San')).toBe(true);
  });
  test('英文或拼音小于2字符', () => {
    expect(PersonNameRule.isValid('S')).toBe(false);
  });
  test('英文或拼音等于2字符', () => {
    expect(PersonNameRule.isValid('SS')).toBe(true);
  });
  test('英文或拼音2字符中间加句点', () => {
    expect(PersonNameRule.isValid('S.S')).toBe(true);
  });
  test('英文或拼音2字符开头加句点', () => {
    expect(PersonNameRule.isValid('.SS')).toBe(false);
  });
  test('英文或拼音2字符末尾加句点', () => {
    expect(PersonNameRule.isValid('SS.')).toBe(false);
  });
  test('英文或拼音2字符开头加空格', () => {
    expect(PersonNameRule.isValid(' SS')).toBe(true);
  });
  test('英文或拼音2字符末尾加空格', () => {
    expect(PersonNameRule.isValid('SS ')).toBe(true);
  });
  test('英文或拼音2字符中间加空格', () => {
    expect(PersonNameRule.isValid('S S')).toBe(true);
  });
  test('英文或拼音等于60字符', () => {
    expect(PersonNameRule.isValid('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSS')).toBe(true);
  });
  test('英文或拼音超过60字符', () => {
    expect(PersonNameRule.isValid('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS')).toBe(false);
  });
  test('英文或拼音3字符中间加空格', () => {
    expect(PersonNameRule.isValid('S S S')).toBe(true);
  });
  test('英文中加中文', () => {
    expect(PersonNameRule.isValid('S S 张三')).toBe(false);
  });
  test('中文前后有空白', () => {
    expect(PersonNameRule.isValid('  阿凡提.穆罕穆德.买买提\r')).toBe(true);
  });
  test('英文前后有空白', () => {
    expect(PersonNameRule.isValid('\nS S S ')).toBe(true);
  });
});
