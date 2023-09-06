let minValue = function(nums){
    if(nums.length === 0){
        return null; //if array empty, return this
    }
    let min = nums[0] //assign to first element

    for(let i = 0; i < nums.length - 1; i = i + 1){
        if(nums[i] < min){ //keep compare to the first element
            min = nums[i];
        }
    }
    return min;
}


console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
