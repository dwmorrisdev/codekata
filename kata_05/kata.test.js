const myFunction = require('./kata');

describe('Code Kata: DNA', () => {

  test.only('tempDisabled until work is begun', () => {
    expect(true).toBe(true);
  });

  test('Test 1: ATTGC', () => {
    expect(myFunction('ATTGC')).toBe('TAACG');
  });
  
  test('Test 2: GTAT', () => {
    expect(myFunction('GTAT')).toBe('CATA');
  });

  test('Test 3: GTCAGT', () => {
    expect(myFunction('GTCAGT')).toBe('CAGTCA');
  });

  test('Test 4: TAACGTA', () => {
    expect(myFunction('TAACGTA')).toBe('ATTGCAT');
  });

  test('Test 5: GACCATTA', () => {
    expect(myFunction('GACCATTA')).toBe('CTGGTAAT');
  });
  
  test('Test 6: TAACGAC', () => {
    expect(myFunction('TAACGAC')).toBe('ATTGCTG');
  });

  test('Test 7: GACTAGCAT', () => {
    expect(myFunction('GACTAGCAT')).toBe('CTGATCGTA');
  });

  test('Test 8: CATCATCATG', () => {
    expect(myFunction('CATCATCATG')).toBe('GTAGTAGTAC');
  });

  test('Test 9: ""', () => {
    expect(myFunction('')).toBe('');
  });

  test('Test 10: "CGGGGGGGGTAC"', () => {
    expect(myFunction('CGGGGGGGGTAC')).toBe('GCCCCCCCCATG');
  });
  
});

