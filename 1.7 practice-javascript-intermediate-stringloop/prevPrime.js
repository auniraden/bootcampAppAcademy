let isPrime = function (number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to find the previous prime number
let prevPrime = function (num) {
    if (num <= 2) {
        return null; // There are no prime numbers less than or equal to 2
    }
    while (true) { //keep on finding the nearest previous prime
        num--;
        if (isPrime(num)) {
            return num;
        }
    }
}



console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null
