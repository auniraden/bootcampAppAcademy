let reverseString = function(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
      let char = str[i];
        reversed += char;
      }

    return reversed;
  };

  console.log(reverseString('fish')); // 'hsif'
  console.log(reverseString('marathon')); // 'nohtaram'
