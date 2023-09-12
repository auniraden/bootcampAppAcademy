function spiralOrder(matrix) {
    let spiraled = [];
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;

    let direction = 'right';
    while (left <= right && top <= bottom){
        if (direction === 'right'){
            for (let i = left; i <= right; i++){
                spiraled.push(matrix[top][i]);
            }
            top++;
            direction = 'down';
        }
        else if (direction === 'down'){
            for (let i = top; i <= bottom; i++){
                spiraled.push(matrix[i][right]);
            }
            right--;
            direction = 'left';
        }
        else if (direction === 'left'){
            for (let i = right; i >= left; i--){
                spiraled.push(matrix[bottom][i]);
            }
            bottom--;
            direction = 'up';
        }
        else if (direction === 'up'){
            for (let i = bottom; i >= top; i--){
                spiraled.push(matrix[i][left]);
            }
            left++;
            direction = 'right';
        }
    }
    return spiraled;
}

// Example usage:
const matrix1 = [[ 1, 2, 3],
                 [ 4, 5, 6],
                 [ 7, 8, 9]];

const matrix2 = [[1, 2, 3, 4],
                 [5, 6, 7, 8],
                 [9, 10, 11, 12]];

console.log(spiralOrder(matrix1)); // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder(matrix2)); // [1,2,3,4,8,12,11,10,9,5,6,7]
