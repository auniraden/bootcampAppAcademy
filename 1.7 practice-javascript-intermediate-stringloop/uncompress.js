function uncompress(str){
    let result = " ";
    let i = 0;

  while (i < str.length) {
    // Extract the character
    const char = str[i];

    // Move to the next character (the count)
    i++;

    // Extract the count as a numeric string
    let count = " ";
    while (i < str.length && !isNaN(Number(str[i]))) {
      count += str[i];
      i++;
    }

    // Convert the count to a number
    count = Number(count);

    // Append the character to the result 'count' times
    for (let j = 0; j < count; j++) {
      result += char;
    }
  }

  return result;
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
