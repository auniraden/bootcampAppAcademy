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

let primeFactors = function(numbers){
    primeFacts = [];

    for(let i = 0; i <= numbers; i++){
        if(numbers % i === 0 && isPrime(i))
        {
            primeFacts.push(i);
        }
    }

    return primeFacts;

}





console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]
