const myFunction = require('./kata');

test('adds 1 + 2 to equal 3', () => {
  expect(myFunction(1, 2)).toBe(3);
});