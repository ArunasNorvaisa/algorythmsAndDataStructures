class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // To the end / tail
  add(value) {
    const newNode = new Node(value, this.head);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.tail.next = null;
    this.length++;

    return this;
  }

  // delete tail
  remove() {
    const prevTail = this.tail;
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return prevTail;
    }

    let curr = this.head;
    let prev = this.head;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;
    return prevTail;
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

const q = new Stack();
q.add('q');
q.add('w');
q.add('e');
q.add('r');
q.add('t');
q.add('y');
q.add('u');
q.add('i');
q.add('o');
q.remove();

console.log('L91 q ===', q);
/*
'L91 q ===' Stack {
  head: Node {
    value: 'q',
    next: Node {
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
                next: Node { value: 'i', next: null }
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
  tail: Node { value: 'i', next: null },
  length: 7,
  ['__proto__']: {
    constructor: ƒ Stack(),
    add: ƒ add(),
    remove: ƒ remove(),
    toArray: ƒ toArray(),
    fromArray: ƒ fromArray()
  }
}
*/
