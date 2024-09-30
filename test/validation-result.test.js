////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { ValidationResult } from '../src';

describe('ValidationResult', () => {
  it('creates a successful validation result by default', () => {
    const result = new ValidationResult();
    expect(result.success).toBe(true);
    expect(result.description).toBe('');
    expect(result.next).toBeNull();
  });

  it('creates a failed validation result with a description', () => {
    const result = new ValidationResult(false, 'Invalid input');
    expect(result.success).toBe(false);
    expect(result.description).toBe('Invalid input');
    expect(result.next).toBeNull();
  });

  it('creates a successful validation result with a description', () => {
    const result = new ValidationResult(true, 'Valid input');
    expect(result.success).toBe(true);
    expect(result.description).toBe('Valid input');
    expect(result.next).toBeNull();
  });

  it('creates a validation result with default values when null or undefined is passed', () => {
    const result1 = new ValidationResult(null, null);
    expect(result1.success).toBe(true);
    expect(result1.description).toBe('');
    expect(result1.next).toBeNull();

    const result2 = new ValidationResult(undefined, undefined);
    expect(result2.success).toBe(true);
    expect(result2.description).toBe('');
    expect(result2.next).toBeNull();
  });

  it('sets next validation result correctly', () => {
    const result1 = new ValidationResult(false, 'First error');
    const result2 = new ValidationResult(false, 'Second error');
    result1.next = result2;
    expect(result1.next).toBe(result2);
    expect(result1.next.description).toBe('Second error');
  });
});

describe('ValidationResult.merge', () => {
  test('ValidationResult.merge()', () => {
    const merged = ValidationResult.merge();
    expect(merged.success).toBe(true);
    expect(merged.description).toBe('');
    expect(merged.next).toBeNull();
  });
  test('ValidationResult.merge(undefined)', () => {
    const merged = ValidationResult.merge(undefined);
    expect(merged.success).toBe(true);
    expect(merged.description).toBe('');
    expect(merged.next).toBeNull();
  });
  test('ValidationResult.merge(null)', () => {
    const merged = ValidationResult.merge(null);
    expect(merged.success).toBe(true);
    expect(merged.description).toBe('');
    expect(merged.next).toBeNull();
  });
  test('ValidationResult.merge([])', () => {
    const merged = ValidationResult.merge([]);
    expect(merged.success).toBe(true);
    expect(merged.description).toBe('');
    expect(merged.next).toBeNull();
  });
  test('ValidationResult.merge(non-array)', () => {
    const merged = ValidationResult.merge(true);
    expect(merged.success).toBe(true);
    expect(merged.description).toBe('');
    expect(merged.next).toBeNull();
  });
  test('merge a single successful validation result', () => {
    const r0 = new ValidationResult(true);
    const merged = ValidationResult.merge([r0]);
    expect(merged.success).toBe(true);
    expect(merged.description).toBe('');
    expect(merged.next).toBeNull();
  });
  test('merge a single failed validation result', () => {
    const r0 = new ValidationResult(false, 'reason 0');
    const merged = ValidationResult.merge([r0]);
    expect(merged.success).toBe(false);
    expect(merged.description).toBe('reason 0');
    expect(merged.next).toBeNull();
  });
  test('merge multiple successful validation results', () => {
    const r0 = new ValidationResult();
    const r1 = new ValidationResult();
    const r2 = new ValidationResult();
    const merged = ValidationResult.merge([r0, r1, r2]);
    expect(merged.success).toBe(true);
    expect(merged.description).toBe('');
    expect(merged.next).toBeNull();
  });
  test('merge multiple failed validation results', () => {
    const r0 = new ValidationResult(false, 'Reason 0');
    const r1 = new ValidationResult(false, 'Reason 1');
    const r2 = new ValidationResult(false, 'Reason 2');
    const merged = ValidationResult.merge([r0, r1, r2]);
    expect(merged.success).toBe(false);
    expect(merged.description).toBe('Reason 0');
    expect(merged.next).not.toBeNull();
    expect(merged.next.success).toBe(false);
    expect(merged.next.description).toBe('Reason 1');
    expect(merged.next.next).not.toBeNull();
    expect(merged.next.next.success).toBe(false);
    expect(merged.next.next.description).toBe('Reason 2');
    expect(merged.next.next.next).toBeNull();
  });
  test('merge multiple successful or failed validation results', () => {
    const r0 = new ValidationResult(true);
    const r1 = new ValidationResult(false, 'Reason 1');
    const r2 = new ValidationResult(true);
    const r3 = new ValidationResult(false, 'Reason 3');
    const merged = ValidationResult.merge([r0, r1, r2, r3]);
    expect(merged.success).toBe(false);
    expect(merged.description).toBe('Reason 1');
    expect(merged.next).not.toBeNull();
    expect(merged.next.success).toBe(false);
    expect(merged.next.description).toBe('Reason 3');
    expect(merged.next.next).toBeNull();
  });
});
