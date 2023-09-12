function pigLatinWord(word) {
    let newWord = "";
    let vowels = "aeiouAEIOU";

    if (vowels.includes(word[0])) {
        newWord = word + "yay";
    } else {
        // Find the index of the first vowel
        let firstVowelIndex = -1;
        for (let i = 0; i < word.length; i++) {
            if (vowels.includes(word[i])) {
                firstVowelIndex = i;
                break;
            }
        }

        if (firstVowelIndex !== -1) {
            newWord = word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + "ay";
        } else {
            newWord = word + "ay"; // If there are no vowels, just add "ay" at the end
        }
    }

    return newWord;
}

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
