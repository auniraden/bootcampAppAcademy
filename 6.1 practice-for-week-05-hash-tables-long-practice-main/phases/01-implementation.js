class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 8) {
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.capacity;
  }

  insert(key, value) {
    const index = this.hash(key);
    const newPair = new KeyValuePair(key, value);

    if (!this.data[index]) {
      this.data[index] = newPair;
    } else {
      let current = this.data[index];
      while (current.next) {
        if (current.key === key) {
          current.value = value;
          return;
        }
        current = current.next;
      }
      if (current.key === key) {
        current.value = value;
      } else {
        current.next = newPair;
      }
    }

    this.count++;
    if (this.count / this.capacity > 0.7) {
      this.resize();
    }
}


  read(key) {
    const index = this.hash(key);
    let current = this.data[index];
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }

  resize() {
    const oldData = this.data;
    this.capacity *= 2;
    this.data = new Array(this.capacity);
    this.count = 0;

    for (let i = 0; i < oldData.length; i++) {
      let current = oldData[i];
      while (current) {
        this.insert(current.key, current.value);
        current = current.next;
      }
    }
  }

  delete(key) {
    const index = this.hash(key);
    if (!this.data[index]) {
      return "Key not found";
    }

    if (this.data[index].key === key) {
      this.data[index] = this.data[index].next;
      this.count--;
      return;
    }

    let current = this.data[index];
    while (current.next) {
      if (current.next.key === key) {
        current.next = current.next.next;
        this.count--;
        return;
      }
      current = current.next;
    }
    return "Key not found";
  }
}

module.exports = HashTable;
