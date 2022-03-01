// Multiplication Tables

// TASK: Print a table containing multiplication tables

// Print a table that contains all the answers to the
// multiplication tables for a given x & y ?

// If input is invalid, return an empty array

const rowBuilder = (index, y) => {
  let arr = [];
  for (let counter = 1; counter <= y; counter++) { 
    const nextValue = index * counter;
    arr.push(nextValue);
  }
  if(arr.length === 0) return;
  return arr;
};

function myFunction(x, y) {
  // example input, 5, 5
  // will return 5 x 5, with the answers for the give multiplication matrix
  // sample return
  // [
  //   [1, 2, 3, 4, 5],
  //   [2, 4, 6, 8, 10], 
  //   [3, 6, 9, 12, 15],
  //   [4, 8, 12, 16, 20],
  //   [5, 10, 15, 20, 25],
  // ]

  // SOLUTION:
  let response = [];
  for (let i = 1; i <= x; i++) {
    const nextRow = rowBuilder(i, y); 
    if(Array.isArray(nextRow)){
      response.push(nextRow);
    }
  }
  return response;
}
module.exports = myFunction;