let tripler = function (nums){
    let tripleNums = [];

    for(let i = 0; i < nums.length; i++){
        let number = nums[i];
        let timesThree = nums[i] * 3;
        tripleNums.push(timesThree);
    }

    return tripleNums;
}


console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
