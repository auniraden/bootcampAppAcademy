let fizzBuzz = function(max){
    let array = [];

    for (let i = 1; i < max; i++){
        if((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)){
            array.push(i);
        }
    }

    return array;
}


console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
