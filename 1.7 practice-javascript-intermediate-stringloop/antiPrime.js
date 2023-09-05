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


let isAntiPrime = function(n) {
  if (n < 2) {
    return false; // 0 and 1 are not anti-primes
  }

  // Calculate the number of divisors for n
  let divisorCount = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisorCount++;
    }
  }

  // Check if n has more divisors than all positive numbers less than n
  for (let i = 1; i < n; i++) {
    let tempDivisorCount = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        tempDivisorCount++;
      }
    }
    if (tempDivisorCount >= divisorCount) {
      return false;
    }
  }

  return true;
}




console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false
