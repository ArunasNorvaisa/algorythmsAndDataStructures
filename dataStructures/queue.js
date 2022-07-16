class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // To the beginning / head
  add(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    if (this.tail === null) {
      this.tail = newNode;
    }

    return this;
  }

  // remove head
  remove() {
    const prevHead = this.head;
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return prevHead;
    }

    this.head = prevHead.next;
    this.length--;
    return prevHead;
  }

  toArray() {
    const arr = [];

    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode);
      currentNode = currentNode.next;
    }

    return arr;
  }

  fromArray(arr) {
    arr.forEach((x) => this.append(x));

    return this;
  }
}

const q = new Queue();
q.add('o');
q.add('i');
q.add('u');
q.add('y');
q.add('t');
q.add('r');
q.add('e');
q.add('w');
q.add('q');
q.remove();

console.log('L79 q ===', q);
/*
'L79 q ===' Queue {
  head: Node {
    value: 'w',
      next: Node {
      value: 'e',
        next: Node {
        value: 'r',
          next: Node {
          value: 't',
            next: Node {
            value: 'y',
              next: Node {
              value: 'u',
                next: Node {
                value: 'i',
                  next: Node { value: 'o', next: null }
              },
              ['__proto__']: { constructor: ƒ Node() }
            }
          },
          ['__proto__']: { constructor: ƒ Node() }
        }
      },
      ['__proto__']: { constructor: ƒ Node() }
    }
  },
  tail: Node { value: 'o', next: null },
  length: 8,
    ['__proto__']: {
    constructor: ƒ Queue(),
      add: ƒ add(),
      remove: ƒ remove(),
      toArray: ƒ toArray(),
      fromArray: ƒ fromArray()
  }
}
*/
