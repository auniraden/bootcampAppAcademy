/**
 * The pseudocode for bubble sort
 * 1.  Iterate through the array
 * 2.  If the current value is greater than its neighbor to the right
 * 3.  Swap those values
 * 4.  Do not move this console.log
 * 5.  If you get to the end of the array and no swaps have occurred, return
 * 6.  Otherwise, repeat from the beginning
 *
 */


function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  console.log(arr.join(",")); // Log the sorted array

  return arr;
}




module.exports = bubbleSort;
