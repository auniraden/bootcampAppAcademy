function consonantCancel(sentence) {
    let words = sentence.split(" ");
    let newSentence = words.map(word => removeFirstConsonants(word));
    return newSentence.join(" ");
}

function removeFirstConsonants(word){
    const vowel = "aeiouAEIOU";
    for(let i = 0; i < word.length; i++){
        if(vowel.includes(word[i])){
            return word.slice(i);
        }
    }
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
