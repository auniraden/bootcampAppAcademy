function moreDotLessDash(str){
    let countDash = 0;
    let countDot = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === '-'){
            countDash = countDash + 1; //can be written as countDash++
        }
        else if (str[i] === '.'){
            countDot = countDot + 1; //can be written as countDot++
        }
    }
    if (countDot > countDash){
        return true;
    }
    else{
        return false;
    }
}



console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false
