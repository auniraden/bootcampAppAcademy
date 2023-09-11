let removeVowels = function(str){
    let vowels = "aeiouAEIOU";
    let newStr = " ";

    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if (!vowels.includes(char)){
            newStr += char;
        }
    }

    return newStr;
}

let abbreviateWords = function(sentence){
    let words = sentence.split(" ");
    let newSentence = [];

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        if(word.length > 4){
            newSentence.push(removeVowels(word));
        }
        else {
            newSentence.push(word);
        }
    }

    return newSentence.join(" ");
}

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
