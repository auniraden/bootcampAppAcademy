let doubleSequence = function(base, length) {
    if (length === 0) {
        return [];
    }

    let seq = [base];
    while (seq.length < length) {
        let last = seq[seq.length - 1];
        let next = last * 2;
        seq.push(next);
    }

    return seq;
};

console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]
