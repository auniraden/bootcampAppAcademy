let alternatingWords = function(words){
    for(let i = 0; i < words.length; i++){
        if (i % 2 === 0){
            words[i] = words[i].toUpperCase();
        }
        else {
            words[i] = words[i].toLowerCase();
        }

    }
}



let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]
