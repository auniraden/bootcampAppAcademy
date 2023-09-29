/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


function range (num1, num2){
  if (num2 < num1){
    return [];
  }
  if (num1 === num2){
    return [];
  }
  let arr = [];
  arr.push(num1);
  let i = num1 + 1;
  let result = range(i, num2);

  return arr.concat(result);
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
