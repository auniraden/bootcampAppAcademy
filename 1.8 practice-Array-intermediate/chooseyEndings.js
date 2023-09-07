//my solution
let chooseyEndings = function (array, endCharacters){
    let filteredArray = [];

    for (let i = 0; i < array.length; i++){
        let findWords = array[i];

        if (findWords.endsWith(endCharacters)){
            filteredArray.push(findWords);
        }
    }

    return filteredArray;
}

//other solution
// let chooseyEndings = function(words, suffix) {
//     if (!Array.isArray(words)) {
//       return [];
//     }

//     let filteredWords = [];

//     for (let i = 0; i < words.length; i++) {
//       let word = words[i];
//       if (word.endsWith(suffix)) {
//         filteredWords.push(word);
//       }
//     }

//     return filteredWords;
//   };


console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]
