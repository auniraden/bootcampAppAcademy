let hasDoubleLetter = function (str){
    if (typeof str === "string"){
        for(let i = 0; i < str.length - 1; i++){
            if(str[i] === str[i + 1]){
                return true;
            }

        }
        return false;
    }
    else {
        return null;
    }

}


console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null
