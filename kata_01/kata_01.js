

// Given a string possibly containing three types
// of braces ({}, [], ()), write a function that
// returns a Boolean indicating whether the given
// string contains a valid nesting of braces. 
function myFunction(str) {
  // example input [[[[[[][[{(())))}]]]]]]]
  // SOLUTION
  const stack = [];
  let openers = new Set(["{", "[", "("]);
  let closers = new Set(["}", "]", ")"]);
  
  const dict = {
    "{" : "}",
    "[" : "]",
    "(" : ")"
  }

  for(let i = 0; i < str.length; i++) {
    let char = str[i];
    if(openers.has(char)) {
        stack.push(char);
    }
    else if (closers.has(char)) {
        //is our stack empty? 
        if(!stack.length) {
            return false;
        }
        //does our popped element not match the corresponding element?
        else if(dict[stack.pop()] !== char) {
            return false;
        }
    }
  }
    
  return stack.length === 0;
}
module.exports = myFunction;