let adjacentSums = function(array){
    let arraySum = [];

    for(let i = 0; i < array.length - 1; i++){
        let sumItUp = array[i] + array[i + 1];
        arraySum.push(sumItUp);
    }

    return arraySum;
}


console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]
