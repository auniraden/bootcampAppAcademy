let pitPat = function (max){
    let numbers = [];

    for (let i = 0; i <= max; i++){
        if ((i % 4 === 0 || i % 6 === 0) && !(i % 4 === 0 && i % 6 === 0)){
            numbers.push(i);
        }
    }

    return numbers;
}







console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]
