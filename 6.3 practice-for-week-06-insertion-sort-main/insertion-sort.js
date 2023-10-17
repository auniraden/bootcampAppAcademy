// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  [3, 2, 0, 4, 1]
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  const len = arr.length;

  for (let divider = 1; divider < len; divider++) {
    const valueToInsert = arr[divider];
    let j = divider - 1;

    if (divider === 1) {
      console.log(''); // Log an empty string for the first time
    }

    while (j >= 0 && arr[j] > valueToInsert) {
      console.log(arr.join(',')); // Log the current state of the array

      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = valueToInsert; // Insert the value at the correct position
  }

  return arr; // Return the mutated array
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  const len = arr.length;

  for (let divider = 1; divider < len; divider++) {
    const valueToInsert = arr[divider];
    let j = divider - 1;

    console.log(arr.join(',')); // Log the current state of the array

    while (j >= 0 && arr[j] > valueToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = valueToInsert; // Insert the value at the correct position
  }

  return arr; // Return the mutated array
}

module.exports = [insertionSort, insertionSortInPlace];
