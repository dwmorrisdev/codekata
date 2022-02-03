const myFunction = require('./kata');

test('Test 1: Kayak', () => {
  expect(myFunction('Kayak')).toBe(true);
});

test('Test 2: Momma', () => {
  expect(myFunction('Momma')).toBe(false);
});

test('Test 3: civic', () => {
  expect(myFunction('civic')).toBe(true);
});

test('Test 4: racecar', () => {
  expect(myFunction('racecar')).toBe(true);
});

test('Test 5: doctor', () => {
  expect(myFunction('doctor')).toBe(false);
});

test('Test 6: pandemic', () => {
  expect(myFunction('pandemic')).toBe(false);
});

test('Test 7: madam', () => {
  expect(myFunction('madam')).toBe(true);
});

test('Test 8: Reviver', () => {
  expect(myFunction('Reviver')).toBe(true);
});

test('Test 9: moon', () => {
  expect(myFunction('moon')).toBe(false);
});

test('Test 10: katana', () => {
  expect(myFunction('katana')).toBe(false);
});

test('Test 11: Mr. Owl ate my metal worm', () => {
  expect(myFunction('Mr. Owl ate my metal worm')).toBe(true);
});

test('Test 12: Coach', () => {
  expect(myFunction('Coach')).toBe(false);
});

test('Test 13: Radar', () => {
  expect(myFunction('Radar')).toBe(true);
});

test('Test 14: Too bad I hid a boot', () => {
  expect(myFunction('Too bad I hid a boot')).toBe(true);
});

test('Test 15: hotdog', () => {
  expect(myFunction('hotdog')).toBe(false);
});

test('Test 16: developer', () => {
  expect(myFunction('developer')).toBe(false);
});

test('Test 17: taco cat', () => {
  expect(myFunction('taco cat')).toBe(true);
});

test('Test 18: Aibohphobia', () => {
  expect(myFunction('Aibohphobia')).toBe(true);
});

test('Test 19: stewwing', () => {
  expect(myFunction('stewwing')).toBe(false);
});

test('Test 20: Was it a car or a cat I saw', () => {
  expect(myFunction('Was it a car or a cat I saw')).toBe(true);
});