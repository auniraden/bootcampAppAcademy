function vowelCipher(string) {
    const vowels = "aeiou";
    let newStr = "";

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        let newChar = char;

        if (vowels.includes(char)) { //when found theh vowels
            const vowelIndex = vowels.indexOf(char);
            newChar = vowels[(vowelIndex + 1) % vowels.length]; //shift the vowel to the next vowel
        }

        newStr += newChar;
    }

    return newStr;
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
