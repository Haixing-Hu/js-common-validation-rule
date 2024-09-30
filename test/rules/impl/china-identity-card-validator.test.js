////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  isIdCardNumberValid,
  getIdCardBirthday,
  getIdCardGender,
  isIdCardAreaValid,
  isIdCardBirthdayValid,
} from '../../../src/rules/impl/china-identity-card-validator';

describe('isIdCardNumberValid', () => {
  it('returns true for valid ID card number', () => {
    expect(isIdCardNumberValid('110101199003078515')).toBe(true);
  });

  it('returns false for ID card number with invalid checksum', () => {
    expect(isIdCardNumberValid('110101199003078516')).toBe(false);
  });

  it('returns false for ID card number with invalid birthday', () => {
    expect(isIdCardNumberValid('110101199013078515')).toBe(false);
  });

  it('returns false for ID card number with non-numeric characters', () => {
    expect(isIdCardNumberValid('11010119900X078515')).toBe(false);
  });

  it('returns false for ID card number with incorrect length', () => {
    expect(isIdCardNumberValid('11010119900307851')).toBe(false);
  });

  it('returns false for non-string input', () => {
    expect(isIdCardNumberValid(123456789012345n)).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isIdCardNumberValid('')).toBe(false);
  });
  it('returns false for null input', () => {
    expect(isIdCardNumberValid(null)).toBe(false);
  });

  it('returns false for undefined input', () => {
    expect(isIdCardNumberValid(undefined)).toBe(false);
  });

  it('returns false for input with invalid characters', () => {
    expect(isIdCardNumberValid('11010119900@078515')).toBe(false);
  });

  it('returns false for input with valid length but invalid characters', () => {
    expect(isIdCardNumberValid('11010119900307851X')).toBe(false);
  });

  it('returns false for input with valid length but invalid area code', () => {
    expect(isIdCardNumberValid('999999199003078515')).toBe(false);
  });

  it('returns false for valid format but invalid birthday', () => {
    expect(isIdCardNumberValid('110105199913210015')).toBe(false);
  });
});

describe('getIdCardBirthday', () => {
  it('returns correct birthday for valid ID card number', () => {
    expect(getIdCardBirthday('110101199003078515')).toBe('1990-03-07');
  });

  it('returns null for ID card number with incorrect length', () => {
    expect(getIdCardBirthday('11010119900307851')).toBeNull();
  });

  it('returns null for non-string input', () => {
    expect(getIdCardBirthday(123456789012345678n)).toBeNull();
  });

  it('returns null for empty string', () => {
    expect(getIdCardBirthday('')).toBeNull();
  });
  it('returns null for null input', () => {
    expect(getIdCardBirthday(null)).toBeNull();
  });

  it('returns null for undefined input', () => {
    expect(getIdCardBirthday(undefined)).toBeNull();
  });
});

describe('getIdCardGender', () => {
  it('returns MALE for valid male ID card number', () => {
    expect(getIdCardGender('110101199003078515')).toBe('MALE');
  });

  it('returns FEMALE for valid female ID card number', () => {
    expect(getIdCardGender('110101199003078524')).toBe('FEMALE');
  });

  it('returns null for ID card number with incorrect length', () => {
    expect(getIdCardGender('11010119900307851')).toBeNull();
  });

  it('returns null for non-string input', () => {
    expect(getIdCardGender(123456789012345678n)).toBeNull();
  });

  it('returns null for empty string', () => {
    expect(getIdCardGender('')).toBeNull();
  });
  it('returns null for null input', () => {
    expect(getIdCardGender(null)).toBeNull();
  });

  it('returns null for undefined input', () => {
    expect(getIdCardGender(undefined)).toBeNull();
  });
});

describe('isIdCardAreaValid', () => {
  it('returns true for valid area code', () => {
    expect(isIdCardAreaValid('110101199003078515')).toBe(true);
  });

  it('returns true for valid area code with leading and trailing spaces', () => {
    expect(isIdCardAreaValid('  110101199003078515   ')).toBe(true);
  });

  it('returns false for invalid area code', () => {
    expect(isIdCardAreaValid('999999199003078515')).toBe(false);
  });

  it('returns false for null input', () => {
    expect(isIdCardAreaValid(null)).toBe(false);
  });

  it('returns false for undefined input', () => {
    expect(isIdCardAreaValid(undefined)).toBe(false);
  });

  it('returns false for input with incorrect length', () => {
    expect(isIdCardAreaValid('110101')).toBe(false);
  });

  it('returns false for input with non-numeric characters', () => {
    expect(isIdCardAreaValid('11010A199003078515')).toBe(false);
  });
});

describe('isIdCardBirthdayValid', () => {
  it('returns true for valid birthday', () => {
    expect(isIdCardBirthdayValid('110101199003078515')).toBe(true);
  });

  it('returns false for invalid year', () => {
    expect(isIdCardBirthdayValid('110101199A03078515')).toBe(false);
  });

  it('returns false for invalid month', () => {
    expect(isIdCardBirthdayValid('110101199013078515')).toBe(false);
  });

  it('returns false for invalid day', () => {
    expect(isIdCardBirthdayValid('110101199003328515')).toBe(false);
  });

  it('returns false for future date', () => {
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + 1);
    const futureYear = futureDate.getFullYear().toString();
    const futureMonth = (futureDate.getMonth() + 1).toString().padStart(2, '0');
    const futureDay = futureDate.getDate().toString().padStart(2, '0');
    const futureId = `110101${futureYear}${futureMonth}${futureDay}8515`;
    expect(isIdCardBirthdayValid(futureId)).toBe(false);
  });

  it('returns false for null input', () => {
    expect(isIdCardBirthdayValid(null)).toBe(false);
  });

  it('returns false for undefined input', () => {
    expect(isIdCardBirthdayValid(undefined)).toBe(false);
  });

  it('returns false for non-string input', () => {
    expect(isIdCardBirthdayValid(123456789012345678n)).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isIdCardBirthdayValid('')).toBe(false);
  });

  it('returns false for input with incorrect length', () => {
    expect(isIdCardBirthdayValid('11010119900307')).toBe(false);
  });
});
