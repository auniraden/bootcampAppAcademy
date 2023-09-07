let longWords = function (words){
    let longestWords = [];

    for(let i = 0; i < words.length; i++){
        let checkWord = words[i];
        if (checkWord.length > 5){
            longestWords.push(checkWord);
        }
    }
    return longestWords;
}


console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
