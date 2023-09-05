function hasThreeVowels(str){
    let countVowels = 0;

    for(let i = 0; i < str.length; i++){
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ) //cannot use '&&' cause no words that can have aeiou all togther
        {
            countVowels++;
        }
    }
    if (countVowels > 3){
        return true
    }

    else {
        return false;
    }
}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
