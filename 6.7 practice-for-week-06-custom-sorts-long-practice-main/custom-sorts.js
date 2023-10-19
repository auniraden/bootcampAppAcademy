function ageSort(users) {
  // Given an array of User objects, sort them in ascending order based on their age. Returns the objects in sorted order.
  let i = 0;
  let j = 1;
  while (i < users.length) {
    if (users[i].age > users[j].age) {
      let temp = users[i];
      users[i] = users[j];
      users[j] = temp;
    }
    i++;
    j++;
  }
  return users;
}

function oddEvenSort(arr) {
  //Given an array, sort it such that the odds appear in ascending order on the left, then the evens on the right. (Remember, try to do this in-place!)
  let i = 0;
  let j = 1;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    i++;
    j++;
  }
  return arr;
}

function validAnagrams(s, t) {
  //Given two strings, s and t, write a function that determines it s and t are anagrams.
  let sArr = s.split("");
  let tArr = t.split("");
  let sObj = {};
  let tObj = {};
  for (let i = 0; i < sArr.length; i++) {
    if (sObj[sArr[i]]) {
      sObj[sArr[i]]++;
    } else {
      sObj[sArr[i]] = 1;
    }
  }
  for (let i = 0; i < tArr.length; i++) {
    if (tObj[tArr[i]]) {
      tObj[tArr[i]]++;
    } else {
      tObj[tArr[i]] = 1;
    }
  }
  for (let key in sObj) {
    if (sObj[key] !== tObj[key]) {
      return false;
    }
  }
  return true;
}

function reverseBaseSort(arr) {
  //Given an array, sort it such that the numbers are grouped by its base in descending order, but ascending within each group.
  let i = 0;
  let j = 1;
  while (i < arr.length) {
    if (arr[i] % 10 < arr[j] % 10) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    i++;
    j++;
  }
  return arr;
}

function frequencySort(arr) {
  //Given an array of integers, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order. Return the sorted array.
  let obj = {};
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let key in obj) {
    newArr.push([key, obj[key]]);
  }
  newArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  let finalArr = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i][1]; j++) {
      finalArr.push(newArr[i][0]);
    }
  }
  return finalArr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
