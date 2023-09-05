function doubleLetterCount(string) {
    let countDoubleLetter = 0;

    for(let i = 0; i < string.length - 1; i++){
        if(string[i] === string[i + 1]){
            countDoubleLetter++;
        }
    }
    return countDoubleLetter;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
