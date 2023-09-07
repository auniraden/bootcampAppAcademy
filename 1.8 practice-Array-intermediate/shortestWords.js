let shortestWord = function(sentence){
    let words = sentence.split('');
    let shortestWord = '';

    for (let i = 1; i < words.length; i++){
        let word = words[i];
        if(word.length < shortestWord.length){
            shortestWord = word;
        }
    }

    return shortestWord;
}

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'
