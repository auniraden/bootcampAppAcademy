let avgVal = function(arr){
    if (arr.length === 0){
        return null;
    }
    let average = 0;
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        average = sum / arr.length;
    }
    return average;
}


console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
