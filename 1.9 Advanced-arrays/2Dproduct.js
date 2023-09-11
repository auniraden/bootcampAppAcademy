let twoDimensionalProduct = function (array){
    let product = 1;

    for(let i = 0; i < array.length; i++){
        let subArr = array[i];

        for(let j = 0; j < subArr.length; j++){
            product = product * subArr[j];
        }
    }
    return product;
}



let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
