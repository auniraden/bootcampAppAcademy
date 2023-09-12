let matrixAddition = function (matrix1, matrix2){
    let matrixSum = [];

    for(let i = 0; i < matrix1.length; i++){
        let subArr = [];
        for(let j = 0; j < matrix1[0].length; j++){
            subArr.push(matrix1[i][j] + matrix2[i][j]); //addition operating the innerloop first
        }
        matrixSum.push(subArr);//after done inner looping, add the arrays, into the outer array
    }
    return matrixSum;
}



let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]
