/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

let isVowel = function (char) {
    const vowels = 'aeiouAEIOU'; // Include both lowercase and uppercase vowels
    return vowels.includes(char);
}
let translateWord = function(word) {
    if (word.length < 3) {
        return word;
      }

      const lastChar = word[word.length - 1];
      const lastVowelIndex = word.split('').findLastIndex(isVowel);

      if (lastVowelIndex === -1 || !isVowel(lastChar)) {
        // If the word doesn't end with a vowel or has no vowels, repeat the word
        return word + word;
      } else {
        // If the word ends with a vowel, repeat the word once
        return word + word.slice(lastVowelIndex + 1);
      }
};

let repeatingTranslate = function(sentence) {
    const words = sentence.split(' ');

    const translatedWords = words.map(function (word) {
    let translatedWord = translateWord(word);

    // Preserve capitalization
    if (word[0] === word[0].toUpperCase()) {
      translatedWord = translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1);
    }

    return translatedWord;
  });

  return translatedWords.join(' ');
};



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}
