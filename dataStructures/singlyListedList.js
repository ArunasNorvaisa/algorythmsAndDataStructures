class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // To the beginning / head
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    if (this.tail === null) {
      this.tail = newNode;
    }

    return this;
  }

  // To the end / tail
  append(value) {
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

  insert(value, indexAt) {
    let index = indexAt < 0 ? 0 : indexAt;
    if (index === 0) {
      this.prepend(value);
      this.length++;
      return this;
    }

    const newNode = new Node(value);
    if (index > this.length - 1) {
      this.append(value);
      this.length++;
      return this;
    }

    let count = 0;
    let tempValue = this.head;

    while(count < index - 1) {
      count++;
      tempValue = tempValue.next;
    }

    newNode.next = tempValue.next;
    tempValue.next = newNode;
    this.length++;

    return this;
  }

  // delete tail
  pop() {
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

  // remove head
  unshift() {
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

const q = new SingleLinkedList();
q.insert(0, 15);
q.prepend('q');
q.append('w');
q.append('e');
q.append('r');
q.append('t');
q.append('y');
q.append('u');
q.append('i');
q.append('o');
q.insert('xxx', 8);
q.append('qqqqqqqqqqqqqq');
q.pop();
q.unshift();

console.log('L158 q ===', q);
/*
'L158 q ===' SingleLinkedList {
  head: Node {
    value: 0,
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
                next: Node {
                  value: 'xxx',
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
      ['__proto__']: { constructor: ƒ Node() }
    }
  },
  tail: Node { value: 'o', next: null },
  lenght: 10,
  ['__proto__']: {
    constructor: ƒ SingleLinkedList(),
    prepend: ƒ prepend(),
    append: ƒ append(),
    insert: ƒ insert(),
    pop: ƒ pop(),
    unshift: ƒ unshift(),
    toArray: ƒ toArray(),
    fromArray: ƒ fromArray()
  }
}
*/
