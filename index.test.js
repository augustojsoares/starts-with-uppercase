const startsWithUppercase = require('./')

it('Returns true for uppercase roman characters', () => {
  expect(startsWithUppercase('Hello')).toBe(true)
})

it('Returns false for lowercase roman characters', () => {
  expect(startsWithUppercase('hello')).toBe(false)
})

it('Returns true for accented uppercase roman characters', () => {
  expect(startsWithUppercase('Água')).toBe(true)
})

it('Returns false for accented lowercase roman characters', () => {
  expect(startsWithUppercase('água')).toBe(false)
})

it('Returns true for roman characters with non romam diacritics', () => {
  expect(startsWithUppercase('Øoo')).toBe(true)
})

it('Returns false for roman characters with non romam diacritics', () => {
  expect(startsWithUppercase('øoo')).toBe(false)
})

it('Returns false for non roman characters', () => {
  expect(startsWithUppercase('你好')).toBe(false)
  expect(startsWithUppercase('你好')).toBe(false)
  expect(startsWithUppercase('여보세요')).toBe(false)
  expect(startsWithUppercase('สวัสดี')).toBe(false)
  expect(startsWithUppercase('مرحبا')).toBe(false)
})

it('Returns false for empty string', () => {
  expect(startsWithUppercase('')).toBe(false)
})

it('Returns false for no input', () => {
  expect(startsWithUppercase()).toBe(false)
})

it('Returns false for invalid inputs', () => {
  expect(startsWithUppercase(undefined)).toBe(false)
  expect(startsWithUppercase(null)).toBe(false)
  expect(startsWithUppercase(0)).toBe(false)
  expect(startsWithUppercase(10)).toBe(false)
  expect(startsWithUppercase(-10)).toBe(false)
  expect(startsWithUppercase([])).toBe(false)
  expect(startsWithUppercase({})).toBe(false)
  expect(startsWithUppercase(NaN)).toBe(false)
  expect(startsWithUppercase(() => {})).toBe(false)
  expect(startsWithUppercase(Number.POSITIVE_INFINITY)).toBe(false)
  expect(startsWithUppercase(Number.MIN_SAFE_INTEGER)).toBe(false)
})
