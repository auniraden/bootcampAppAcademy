
function reverseSentence(sentence){
    let splitWords = sentence.split(' '); //first split into array
    let reversedWords = [];

    for(let i = splitWords.length - 1; i >= 0; i--){
        reversedWords.push(splitWords[i]);
    }

    let newSentence = reversedWords.join(' ');
    return newSentence;
}

console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
