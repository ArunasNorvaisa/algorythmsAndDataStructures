class Heap {

  constructor() {
    // We are constructing the Heap represented by Array.
    this.heapContainer = [];
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1;
  }

  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2;
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  swap(indexOne, indexTwo) {
    [this.heapContainer[indexOne], this.heapContainer[indexTwo]] = [this.heapContainer[indexTwo], this.heapContainer[indexOne]];
  }

  add(item) {
    this.heapContainer.push(item);
    this.moveUp();
    return this;
  }

  find(item) {
    const foundIndexes = [];

    for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
      if (item === this.heapContainer[itemIndex]) {
        foundIndexes.push(itemIndex);
      }
    }

    return foundIndexes;
  }

  moveUp(customStartIndex) {
    // Take the last element (last in array or the bottom left in a tree)
    // in the heap container and lift it up until it is in the correct
    // order with respect to its parent element.
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while (
      this.hasParent(currentIndex)
      && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
      ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  moveDown(customStartIndex = 0) {
    // Compare the parent element to its children and swap parent with the appropriate
    // child (smallest child for MinHeap, largest child for MaxHeap).
    // Do the same for next children after swap.
    let currentIndex = customStartIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex)
        && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.pairIsInCorrectOrder(
        this.heapContainer[currentIndex],
        this.heapContainer[nextIndex],
      )) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  delete(item) {
    // Find number of items to remove.
    const numberOfItemsToRemove = this.find(item).length;

    for (let i = 0; i < numberOfItemsToRemove; i += 1) {
      // We need to find item index to remove each time after removal since
      // indices are being changed after each heapify process.
      const indexToRemove = this.find(item).pop();

      // If we need to remove last child in the heap then just remove it.
      // There is no need to heapify the heap afterwards.
      if (indexToRemove === (this.heapContainer.length - 1)) {
        this.heapContainer.pop();
      } else {
        // Move last element in heap to the vacant (removed) position.
        this.heapContainer[indexToRemove] = this.heapContainer.pop();

        // Get parent.
        const parentItem = this.parent(indexToRemove);

        // If there is no parent or parent is in correct order with the node
        // we're going to delete then move down. Otherwise move up.
        if (
          this.hasLeftChild(indexToRemove)
          && (
            !parentItem
            || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove])
          )
        ) {
          this.moveDown(indexToRemove);
        } else {
          this.moveUp(indexToRemove);
        }
      }
    }
  }
}

class MaxHeap extends Heap {
   // Checks if pair of heap elements is in correct order.
   // For MaxHeap the first element must be always bigger or equal.
  pairIsInCorrectOrder(el1, el2) {
    return el1 >= el2;
  }
}

class MinHeap extends Heap {
   // Checks if pair of heap elements is in correct order.
   // For MinHeap the first element must be always smaller or equal.
  pairIsInCorrectOrder(el1, el2) {
    return el1 <= el2;
  }
}

const min = new MinHeap();
min.add(1);
min.add(10);
min.add(-41);
min.add(-1);
min.add(-2);
min.add(18.5);
min.add(65);
min.add(44);
min.add(106);
min.add(51);
min.add(-41);
min.add(88);
min.add(88.5);
min.add(-55);
min.add(-54.9);

console.log('L183 min ===', min);

// 'L183 min ===' MinHeap { heapContainer: [-55, -41, -54.9, 10, -2, 18.5, -41, 44, 106, 51, -1, 88, 88.5, 65, 1] }

const max = new MaxHeap();
max.add(1);
max.add(10);
max.add(-41);
max.add(-1);
max.add(-2);
max.add(18.5);
max.add(65);
max.add(44);
max.add(106);
max.add(51);
max.add(-41);
max.add(88);
max.add(88.5);
max.add(-55);
max.add(-54.9);

console.log('L202 max ===', max);

// 'L202 max ===' MaxHeap { heapContainer: [106, 65, 88.5, 44, 51, 88, 10, -1, 1, -2, -41, -41, 18.5, -55, -54.9] }

min.delete(1);
max.delete(10);

console.log('L209 min ===', min);
console.log('L210 max ===', max);

// 'L209 min ===' MinHeap { heapContainer: [-55, -41, -54.9, 10, -2, 18.5, -41, 44, 106, 51, -1, 88, 88.5, 65] }
// 'L210 max ===' MaxHeap { heapContainer: [106, 65, 88.5, 44, 51, 88, -54.9, -1, 1, -2, -41, -41, 18.5, -55] }
