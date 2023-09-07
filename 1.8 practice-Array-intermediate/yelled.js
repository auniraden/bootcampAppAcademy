let yeller = function (words){
    let yelled = [];

    for (let i = 0; i < words.length; i++){
        let word = words[i];
        let bigLetter = word.toUpperCase() + "!";
        yelled.push(bigLetter);
    }

    return yelled;
}


console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
