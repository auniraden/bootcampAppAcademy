let zanyZip = function(arr1, arr2){
    let zipped = [];
    for(let i = 0; i < arr1.length || i < arr2.length; i++){
        let element1 = arr1[i];
        let element2 = arr2[i];

        if(element1 === undefined){
            element1 = null;
        }
        if(element2 === undefined){
            element2 = null;
        }
        zipped.push([element1, element2]);
    }

    return zipped;

}



console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
