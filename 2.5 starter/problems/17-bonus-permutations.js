/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

function permutations(array) {

  if (!array[0]){
    return [[]];
  }
  let first = array[0];
  let perms = permutations(array.slice(1));
  let newPerms = [];
  for (let i = 0; i < perms.length; i++){
    for (let j = 0; j <= perms[i].length; j++){
      let newPerm = perms[i].slice(0, j).concat([first]).concat(perms[i].slice(j));
      newPerms.push(newPerm);
    }
  }
  return newPerms;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
