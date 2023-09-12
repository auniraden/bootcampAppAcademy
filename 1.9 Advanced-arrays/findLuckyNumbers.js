function luckyNumbers(matrix) {
    let luckyNum = [];
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    for(let row = 0; row < numRows; row++){
        let minInRow = matrix[row][0]; //assume that the minimum value is in the first column
        let colIndex = 0;

        //find minimum value in the row and its columns index
        for (let col = 1; col < numCols; col++){
            if(matrix[row][col] < minInRow){
                minInRow = matrix[row][col];
                colIndex = col;
            }
        }

        //check if it's maximum in the column
        let isMaxInCol = true;
        for(let r = 0; r < numRows; r++){
            if(matrix[r][colIndex] > minInRow){
                isMaxInCol = false;
                break;
            }
        }
        //if it's maximum in its column, it's a lucky number
        if(isMaxInCol){
            luckyNum.push(minInRow);
            return luckyNum;
        }

    }
    //if no lucky number
    return "Sorry, no luck for today :(";
  }


  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]

  console.log(luckyNumbers(matrix)); // [12]

  matrix = [[ 5, 10,  8,  6],
            [10,  2,  7,  9],
            [21, 15, 19, 10]]

  console.log(luckyNumbers(matrix)); // [10]
