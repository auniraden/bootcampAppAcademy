const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    return parseInt(sha256(key).slice(0, 8), 16);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    const index = this.hashMod(key);
    if (this.data[index] === null){
      this.data[index] = new KeyValuePair(key, value);
    } else {
      throw new Error('hash collision or same key/value pair already exists!');
    }
    this.count++;
}

insertWithHashCollisions(key, value) {
  const index = this.hashMod(key);

  if (this.data[index] === null) {
    // If the bucket is empty, create a new KeyValuePair and store it in the bucket
    this.data[index] = new KeyValuePair(key, value);
  } else {
    // If the bucket is not empty, insert the new KeyValuePair at the head of the linked list
    const newPair = new KeyValuePair(key, value);
    newPair.next = this.data[index]; // Set the next of the new pair to the current head of the list
    this.data[index] = newPair; // Update the head of the list to the new pair
  }

  this.count++;
}

insert(key, value) {
  const index = this.hashMod(key);

  if (this.data[index] === null) {
    // The bucket is empty, so create a new KeyValuePair and store it
    this.data[index] = new KeyValuePair(key, value);
  } else {
    let current = this.data[index];
    while (current) {
      if (current.key === key) {
        // The same key already exists; update the value
        current.value = value;
        return; // Exit the function after updating
      }
      if (current.next === null) {
        // Reached the end of the linked list, so insert the new KeyValuePair
        current.next = new KeyValuePair(key, value);
        return; // Exit the function after inserting
      }
      current = current.next;
    }
  }

  this.count++;
}



}


module.exports = HashTable;
