let initials = function (name){
    let separate = name.split(" ");
    let firstLetters = [];

    for (let i = 0; i < separate.length; i++ ){
        let separates = separate[i];
        firstLetters.push(separates[0].toUpperCase());
    }

    return firstLetters.join(' ');

}


console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'
