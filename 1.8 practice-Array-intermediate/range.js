let range = function(min, max){
    let numbers = [];
    for (let i = min; i <= max; i++){
        numbers.push(i);
    }
    return numbers;
}

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []