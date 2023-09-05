function mostVowels(sentence) {
    //split into word
    const words = sentence.split(" ");
    let maxVowelCount = 0;
    let maxVowelWord = "";

    for (let i = 0; i < words.length; i++) {
        let countVowels = 0; // Count of vowels in the current word

        // Iterate through the characters in the current word
        for (let j = 0; j < words[i].length; j++) {
            const char = words[i][j].toLowerCase(); // Check for case-insensitive comparison

            // Check if the character is a vowel
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                countVowels++;
            }
        }

        // Compare the vowel count of the current word with the maximum vowel count found so far
        if (countVowels > maxVowelCount) {
            maxVowelCount = countVowels;
            maxVowelWord = words[i];
        }
    }

    return maxVowelWord;
}

console.log(mostVowels("what a wonderful life")); // "wonderful"
