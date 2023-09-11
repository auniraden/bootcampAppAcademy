function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function summationSequence(start, length) {
    let seq = [start];

    for (let i = seq.length; i < length; i++) {
        seq.push(summation(seq[seq.length - 1]));
    }
    return seq;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
