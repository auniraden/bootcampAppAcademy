// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insert(val, currentNode = this.root) {
      if (!this.root) {
        this.root = new TreeNode(val);
        return this;
      }

      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = new TreeNode(val);
        } else {
          this.insert(val, currentNode.left);
        }
      } else if (val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = new TreeNode(val);
        } else {
          this.insert(val, currentNode.right);
        }
      }

      return this;
    }

    search(val, currentNode = this.root) {
      if (!currentNode) {
        return false;
      }

      if (val === currentNode.val) {
        return true;
      }

      if (val < currentNode.val) {
        return this.search(val, currentNode.left);
      }

      if (val > currentNode.val) {
        return this.search(val, currentNode.right);
      }
    }

    preOrderTraversal(currentNode = this.root) {
      if (!currentNode) {
        return;
      }

      console.log(currentNode.val); // Print before recursive calls
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }

    inOrderTraversal(currentNode = this.root) {
      if (!currentNode) {
        return;
      }

      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val); // Print in the middle of recursive calls
      this.inOrderTraversal(currentNode.right);
    }

    postOrderTraversal(currentNode = this.root) {
      if (!currentNode) {
        return;
      }

      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val); // Print after recursive calls
    }

    breadthFirstTraversal() {
      if (!this.root) {
        return;
      }

      const queue = [this.root];

      while (queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode.val);

        if (currentNode.left) {
          queue.push(currentNode.left);
        }

        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
    }
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      if (!this.root) {
        return;
      }

      const stack = [this.root]; // Initialize a stack with the root node

      while (stack.length > 0) { // While the stack is not empty
        const currentNode = stack.pop(); // Pop and remove the last node in the stack

        console.log(currentNode.val); // Print the value of the current node

        if (currentNode.left) {
          stack.push(currentNode.left); // Push the left node on the back of the stack
        }

        if (currentNode.right) {
          stack.push(currentNode.right); // Push the right node on the back of the stack
        }
      }
    }
  }

  module.exports = { BinarySearchTree, TreeNode };
