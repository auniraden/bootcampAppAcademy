function caesarCipher(string, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let oldIdx = alphabet.indexOf(char);
        let newIdx = oldIdx + num;
        let newChar = alphabet[newIdx % alphabet.length];
        newString += newChar;
    }
    return newString;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
