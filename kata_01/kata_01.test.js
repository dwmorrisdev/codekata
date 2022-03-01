const myFunction = require('./kata_01');

describe('Code Kata: Bracket matching', () => {
  test('Test 1: [[[[[[][[{(())))}]]]]]]]', () => {
    expect(myFunction('[[[[[[][[{(())))}]]]]]]]')).toBe(false);
  });
  
  test('Test 2: {}[]()()[]{}', () => {
    expect(myFunction('{}[]()()[]{}')).toBe(true);
  });
  
  test('Test 3: [[[({}})][({})]]]', () => {
    expect(myFunction('[[[({}})][({})]]]')).toBe(false);
  });
  
  test('Test 4: {[]({[{}]})}', () => {
    expect(myFunction('{[]({[{}]})}')).toBe(true);
  });
  
  test('Test 5: [[[()]]][][[[{}]]]', () => {
    expect(myFunction('[[[()]]][][[[{}]]]')).toBe(true);
  });
  
  test('Test 6: [[[[[]]]][][', () => {
    expect(myFunction('[[[[[]]]][][')).toBe(false);
  });
  
  test('Test 7: }{][', () => {
    expect(myFunction('}{][')).toBe(false);
  });
  
  test('Test 8: (()))(()()()))', () => {
    expect(myFunction('(()))(()()()))')).toBe(false);
  });
  
  test('Test 9: [(){{{{}}}}()]', () => {
    expect(myFunction('[(){{{{}}}}()]')).toBe(true);
  });
  
  test('Test 10: {[(/)]}', () => {
    expect(myFunction('{[(/)]}')).toBe(true);
  });
  
  test('Test 11: )', () => {
    expect(myFunction(')')).toBe(false);
  });
  
  test('Test 12: []', () => {
    expect(myFunction('[]')).toBe(true);
  });
  
  test('Test 13: [()()(){}{}{}[][][]]', () => {
    expect(myFunction('[()()(){}{}{}[][][]]')).toBe(true);
  });
  
  test('Test 14: empty string', () => {
    expect(myFunction('')).toBe(true);
  });
  
  test('Test 15: [', () => {
    expect(myFunction('[')).toBe(false);
  });
  
  test('Test 16: ((((((((()()()))))))))', () => {
    expect(myFunction('((((((((()()()))))))))')).toBe(true);
  });
  
  test('Test 17: {[[])([]]]}', () => {
    expect(myFunction('{[[])([]]]}')).toBe(false);
  });
  
  test('Test 18: []{}{}{}{}{}{}{}{][][][][][][][]', () => {
    expect(myFunction('[]{}{}{}{}{}{}{}{][][][][][][][]')).toBe(false);
  });
  
  test('Test 19: []{}{}{}{}{}{}{}[][][][][][][][]', () => {
    expect(myFunction('[]{}{}{}{}{}{}{}[][][][][][][][]')).toBe(true);
  });
  
  test('Test 20: {([({}][(({}))][{}{{}()()}])}', () => {
    expect(myFunction('{([({}][(({}))][{}{{}()()}])}')).toBe(false);
  });
});

