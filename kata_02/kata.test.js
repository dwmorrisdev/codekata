const myFunction = require('./kata');

test('Test 1: trample & templar', () => {
  expect(myFunction('trample', 'templar')).toBe(true);
});

test('Test 2: latch & hitch', () => {
  expect(myFunction('latch', 'hitch')).toBe(false);
});

test('Test 3: case & aces', () => {
  expect(myFunction('case', 'aces')).toBe(true);
});

test('Test 4: flow & wolf', () => {
  expect(myFunction('flow', 'wolf')).toBe(true);
});

test('Test 5: test & toast', () => {
  expect(myFunction('test', 'toast')).toBe(false);
});

test('Test 6: time & dime', () => {
  expect(myFunction('time', 'dime')).toBe(false);
});

test('Test 7: heart & earth', () => {
  expect(myFunction('heart', 'earth')).toBe(true);
});

test('Test 8: Apple Macintosh & laptop machines', () => {
  expect(myFunction('apple macintosh', 'laptop machines')).toBe(true);
});

test('Test 9: couth & booth', () => {
  expect(myFunction('couth', 'booth')).toBe(false);
});

test('Test 10: testing & jesting', () => {
  expect(myFunction('testing', 'jesting')).toBe(false);
});

test('Test 11: Astronomer & moon starer', () => {
  expect(myFunction('astronomer', 'moon starer')).toBe(true);
});

test('Test 12: length & strength', () => {
  expect(myFunction('length', 'strength')).toBe(false);
});

test('Test 13: Dictionary & indicatory', () => {
  expect(myFunction('Dictionary', 'indicatory')).toBe(true);
});

test('Test 14: Dormitory & dirty room', () => {
  expect(myFunction('Dormitory', 'dirty room')).toBe(true);
});

test('Test 15: bigly & gibbly', () => {
  expect(myFunction('bigly', 'gibbly')).toBe(false);
});

test('Test 16: trout & route', () => {
  expect(myFunction('trout', 'route')).toBe(false);
});

test('Test 17: greet & meets', () => {
  expect(myFunction('greet', 'meets')).toBe(false);
});

test('Test 18: Editor & redo it', () => {
  expect(myFunction('')).toBe(true);
});

test('Test 19: snooze alarms & Alas, no more Zs', () => {
  expect(myFunction('snooze alarms', 'Alas, no more Zs')).toBe(true);
});

test('Test 20: night & thing', () => {
  expect(myFunction('night', 'thing')).toBe(true);
});