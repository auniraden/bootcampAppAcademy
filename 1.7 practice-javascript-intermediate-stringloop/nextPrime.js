let isPrime = function(number){
    if (number < 2){
        return false;
    }
    for (let i = 2; i < number; i++ ){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}

let nextPrime = function(num){
    if (num <= 1){
        return 2;
    }

    while (true){
        num++;

        if (isPrime(num)){
            return num;
        }
    }

}



console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101
