let containsWord = function(sentence, targetWord){
    let findWord = sentence.split(' '); //split the string into array first

    for(let i = 0; i < findWord.length; i++){

        let lowerCaseWord = findWord[i].toLowerCase(); //to find exactly the word, change the word into lowerCase

        if(lowerCaseWord === targetWord){//then if found the word, return true
            return true;
        }
    }
    return false;
}




console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false
