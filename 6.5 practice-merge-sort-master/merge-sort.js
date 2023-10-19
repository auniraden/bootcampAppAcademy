// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1){
    // If so, it's already sorted: return
    return arr;
  }
  // Divide the array in half
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort the left half
  const leftSortedArray = mergeSort(left);

  // Recursively sort the right half
  const rightSortedArray = mergeSort(right);

  // Merge the halves together and return
  return merge(leftSortedArray, rightSortedArray);

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  const mergedArray = [];
  // Point to the first value of each array
    let pointerA = 0;
    let pointerB = 0;
    let i=0;

  // While there are still values in each array...
  while (pointerA < arrA.length && pointerB < arrB.length) {

    // Compare the first values of each array
    if (arrA[pointerA] < arrB[pointerB]) {
      // Add the smaller value to the return array
      mergedArray[i] = arrA[pointerA];
      // Move the pointer to the next value in that array
      pointerA++;
    } else {
      // Add the smaller value to the return array
      mergedArray[i] = arrB[pointerB];
      // Move the pointer to the next value in that array
      pointerB++;
    }
    i++;
  }
  // Return the return array
  return [...mergedArray,...arrA.slice(pointerA),...arrB.slice(pointerB)];

}

module.exports = [merge, mergeSort];
