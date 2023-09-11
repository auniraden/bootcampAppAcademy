function sameCharCollapse(str) {
    let reducible = true; // to find if there's still copy of letters.

    while (reducible) {
        let chars = str.split(""); //turn into array
        reducible = false;

        for (let i = 0; i < chars.length - 1; i++) {
            if (chars[i] == chars[i+1]) {
                chars[i] = "";
                chars[i + 1] = "";
                reducible = true;
            }
        }
        str = chars.join("");
    }
    return str;
}


console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
