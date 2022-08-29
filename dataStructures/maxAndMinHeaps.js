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
}

class MaxHeap extends Heap {
   // Checks if pair of heap elements is in correct order.
   // For MaxHeap the first element must be always bigger or equal.
  pairIsInCorrectOrder(heap1, heap2) {
    return heap1 >= heap2;
  }
}

class MinHeap extends Heap {
   // Checks if pair of heap elements is in correct order.
   // For MinHeap the first element must be always smaller or equal.
  pairIsInCorrectOrder(heap1, heap2) {
    return heap1 <= heap2;
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

console.log('L91 min ===', min);

// 'L91 min ===' MinHeap {heapContainer: [-55, -41, -54.9, 10, -2, 18.5, -41, 44, 106, 51, -1, 88, 88.5, 65, 1]}

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

console.log('L112 max ===', max);

// 'L112 max ===' MaxHeap {heapContainer: [106, 65, 88.5, 44, 51, 88, 10, -1, 1, -2, -41, -41, 18.5, -55, -54.9]}
