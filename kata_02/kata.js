// Finding Anagrams

// What is an anagram?
// An anagram is another word or phrase that is formed by
// rearranging the letters of the first word or phrase.

// TASK:
// Create a function that takes in two strings and 
// returns a boolean that indicates whether or not
// the first string is an anagram of the second string.

const isAlphanumeric = (value) => Boolean(value.match(/[a-z]/i));
const cleanString = (string) => string?.toLowerCase().split('').sort();

function myFunction(str1, str2) {
  // example input, eat & ate 
  // returns true
  // kata code here

  // SOLUTION
  // handle spaces and grammatical characters
  const clean1 = cleanString(str1).filter(index => isAlphanumeric(index)).join('');
  const clean2 = cleanString(str2).filter(index => isAlphanumeric(index)).join('');

  // if cleaned strings aren't the same length return false 
  if(clean1.length !== clean2.length) return false;

  // if strings match they are an anagram
  return clean1 === clean2;

}
module.exports = myFunction;