const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootInt = null;
    this.sizeInt = 0;
  }

  root() {
    return this.rootInt;
  }

  add(data) {
    if (!this.rootInt || this.sizeInt === 0) {
      this.rootInt = new Node(data);
      this.sizeInt += 1;
      return;
    }

    let current = this.rootInt;
    while (true) {
      if (data === current.data) {
        return;
      }

      if (data > current.data) {
        if (!current.right) {
          current.right = new Node(data);
          this.sizeInt += 1;
          return;
        }
        current = current.right;
      }

      if (data < current.data) {
        if (!current.left) {
          current.left = new Node(data);
          this.sizeInt += 1;
          return;
        }
        current = current.left;
      }
    }
  }

  find(data) {
    let current = this.rootInt;
    while (current !== null) {

      if (data === current.data) {
        return current;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  has(data) {
    return !!(this.find(data));
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  min() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  max() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }
}

module.exports = {
  BinarySearchTree
};