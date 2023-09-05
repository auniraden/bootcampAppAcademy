function tripletTrue(str){
    for (let i = 0; i < str.length - 2; i++){ //make sure that don't go beyond str[i + 1 or 2]
        if(str[i] === str[i + 1] && str[i] === str[i + 2]){
            return true;
        }
    }

    return false;

}



console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false
