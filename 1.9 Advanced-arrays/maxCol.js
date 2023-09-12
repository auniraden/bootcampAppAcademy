function maxColumn(matrix) {
    const height = matrix.length;
    const width = matrix[0].length;

    const maxColumns = [];
    for (let col = 0 ; col < width ; col++) {
      let colMax = matrix[0][col];
      for (let row = 1 ; row < height ; row++) {
          if (matrix[row][col] > colMax) {
              colMax = matrix[row][col];
          }
      }
      maxColumns.push(colMax);
    }


    return maxColumns;
  }

  console.log(maxColumn(matrix)); // [12, 19, 21]
