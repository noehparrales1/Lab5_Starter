// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phonenumber', () => {
  expect(isPhoneNumber('(909)-733-1592')).toBe(true);
  expect(isPhoneNumber('909-733-1592')).toBe(true);
  expect(isPhoneNumber(9097331592)).toBe(false);
  expect(isPhoneNumber(909333)).toBe(false);
});

test('valid email', () => {
  expect(isEmail('n@n.com')).toBe(true);
  expect(isEmail('noeh@ucsd.edu')).toBe(true);
  expect(isEmail('@jfjj.com')).toBe(false);
  expect(isEmail('Noehparrales@ucsd.eduu')).toBe(false);
});

test('valid date', () => {
  expect(isDate("1/1/2020")).toBe(true);
  expect(isDate("5/7/2025")).toBe(true);
  expect(isDate("111/111/11111")).toBe(false);
  expect(isDate("1/1/1")).toBe(false);
});

test('valid hex', () =>{
  expect(isHexColor('abc')).toBe(true);
  expect(isHexColor('#00aa00')).toBe(true);
  expect(isHexColor('#1a2b3z')).toBe(false);
  expect(isHexColor('#1234567')).toBe(false);
});