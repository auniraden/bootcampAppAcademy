let removeEWords = function (sentence){
    let words = sentence.split(" ");

    let filtered = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (!word.toLowerCase().includes('e')) {
            filtered.push(word);
        }
    }
    return filtered.join(" ");
}





console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
