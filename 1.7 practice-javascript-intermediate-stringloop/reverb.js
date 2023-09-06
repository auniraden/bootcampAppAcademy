//my solution
let reverb = function (str){
    if (typeof str !== "string"){
        return null;
    }

    let vowels = "aeiouAEIOU";
    let lastVowel = -1;

    for(let i = 1; i < str.length; i++){ //to find the last vowel in the array
        if (vowels.includes(str[i])){
            lastVowel = i;
        }
    }

    if (lastVowel !== -1){ //if found the last vowel, add the vowel and the rest of the letters after the vowel at the end of the original string
        let subString = str.substring(lastVowel);
        str = str + subString;
    }
    return str;
}

// other solution (much more simple and clean)
// let reverb = function(word) {
//     if (typeof word !== 'string') {
//       return null;
//     }
//     let vowels = 'aeiouAEIOU';
//     for (let i = word.length - 1; i >= 0 ;i--) {
//       if (vowels.includes(word[i])) {
//         return word + word.slice(i);
//       }
//     }
    // return word;
  //}


console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
