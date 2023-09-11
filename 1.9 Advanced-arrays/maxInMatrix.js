function maxInMatrix(matrix) {
    let max = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if (matrix[i][j] > max){
                max = matrix[i][j];
            }
        }
    }
    return max;
  }


  matrix = [[11,  2,-99],
            [20, 19, 10],
            [47, 72, 56]]

  console.log(maxInMatrix(matrix)); // 72
