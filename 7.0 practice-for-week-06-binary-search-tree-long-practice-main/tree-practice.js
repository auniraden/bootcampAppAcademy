const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  let currentNode = rootNode;
  while (currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode.val;
}

function findMaxBST (rootNode) {
  let currentNode = rootNode;
  while (currentNode.right) {
    currentNode = currentNode.right;
  }
  return currentNode.val;
}

function findMinBT (rootNode) {
  let currentNode = rootNode;
  let min = currentNode.val;
  if (currentNode.left) {
    min = Math.min(min, findMinBT(currentNode.left));
  }
  if (currentNode.right) {
    min = Math.min(min, findMinBT(currentNode.right));
  }
  return min;
}

function findMaxBT (rootNode) {
  let currentNode = rootNode;
  let max = currentNode.val;
  if (currentNode.left) {
    max = Math.max(max, findMaxBT(currentNode.left));
  }
  if (currentNode.right) {
    max = Math.max(max, findMaxBT(currentNode.right));
  }
  return max;
}

function getHeight (rootNode) {
  let currentNode = rootNode;
  if (!currentNode) {
    return -1;
  }
  return 1 + Math.max(getHeight(currentNode.left), getHeight(currentNode.right));
}

function balancedTree (rootNode) {
  let currentNode = rootNode;
  if (!currentNode) {
    return true;
  }
  let leftHeight = getHeight(currentNode.left);
  let rightHeight = getHeight(currentNode.right);
  return Math.abs(leftHeight - rightHeight) <= 1 && balancedTree(currentNode.left) && balancedTree(currentNode.right);
}

function countNodes (rootNode) {
  let currentNode = rootNode;
  if (!currentNode) {
    return 0;
  }
  return 1 + countNodes(currentNode.left) + countNodes(currentNode.right);
}

function getParentNode(rootNode, target) {
  let currentNode = rootNode;
  let parentNode = null;

  while (currentNode) {
    if (target === currentNode.val) {
      return parentNode; // Found the node with the given value
    } else if (target < currentNode.val) {
      parentNode = currentNode;
      currentNode = currentNode.left;
    } else {
      parentNode = currentNode;
      currentNode = currentNode.right;
    }
  }

  return undefined; // Return null if the target is not found in the tree
}


function inOrderPredecessor(rootNode, target) {
  let currentNode = rootNode;
  let parentNode = null;

  while (currentNode) {
    if (target < currentNode.val) {
      currentNode = currentNode.left;
    } else if (target > currentNode.val) {
      parentNode = currentNode;
      currentNode = currentNode.right;
    } else {
      if (currentNode.left) {
        return findMaxBST(currentNode.left); // Return the maximum value in the left subtree
      } else {
        return parentNode ? parentNode.val : null; // Return the parent value or null if there's no in-order predecessor
      }
    }
  }

  return null; // Return null if the target is not found
}

function deleteNodeBST(rootNode, target) {
  if (!rootNode) {
    return null; // Return null if the tree is empty
  }

  if (target < rootNode.val) {
    rootNode.left = deleteNodeBST(rootNode.left, target);
  } else if (target > rootNode.val) {
    rootNode.right = deleteNodeBST(rootNode.right, target);
  } else {
    // Case 1: Node with only one child or no child
    if (!rootNode.left) {
      return rootNode.right;
    } else if (!rootNode.right) {
      return rootNode.left;
    }

    // Case 2: Node with two children
    rootNode.val = findMinBST(rootNode.right); // Find the in-order successor (minimum value in the right subtree)
    rootNode.right = deleteNodeBST(rootNode.right, rootNode.val); // Delete the in-order successor
  }

  return rootNode;
}




module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
