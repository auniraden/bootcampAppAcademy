let fibonacciSequence = function(length) {
    if (length === 0) {
        return [ ];
    } else if (length === 1) {
        return [ 1 ];
    }

    let seq = [1, 1];
    while (seq.length < length) {
        let last = seq[seq.length - 1];
        let secondLast = seq[seq.length - 2];
        let next = last + secondLast;
        seq.push(next);
    }
    return seq;
}

console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]
