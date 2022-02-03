// Palindromes

// TASK
// Given a string write a function that will return whether
// or not that string is a palindrome.


function myFunction(string) {
  // example input -> rotator
  // returns true
  // SOLUTION
  let trimmed = string.replace(/[^\w]/g, '').toLowerCase();
  const compare = trimmed.split('').reverse().join('');
  return trimmed === compare;
}

module.exports = myFunction;