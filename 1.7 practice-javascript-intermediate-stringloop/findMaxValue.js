let maxValue = function(nums){
    if (nums.length === 0){
        return null;
    }

    let max = 0;

    for(let i = 0; i < nums.length; i = i + 1){
        if(nums[i] > max){
            max = nums[i];
        }
    }
    return max;
}


console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
