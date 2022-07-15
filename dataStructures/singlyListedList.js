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
  }

  // To the beginning / head
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

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

    return this;
  }

  insert(value, indexAt) {
    let index = indexAt < 0 ? 0 : indexAt;
    if (index === 0) {
      this.prepend(value);
      return this;
    }

    const newNode = new Node(value);
    if (index > this.lenght() - 1) {
      this.append(value);
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

    return this;
  }

  // delete tail
  pop() {
    const prevTail = this.tail;
    if (this.head === null) {
      return null;
    }

    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
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
    return prevTail;
  }

  // remove head
  unshift() {
    const prevHead = this.head;
    if (this.head === null) {
      return null;
    }

    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      return prevHead;
    }

    this.head = prevHead.next;
    return prevHead;
  }

  lenght() {
    if (this.head === null) {
      return 0;
    }

    let curr = this.head;
    let temp = 1;

    while(curr.next) {
      curr = curr.next;
      temp++;
    }

    return temp;
  }

}

const q = new SingleLinkedList();
q.prepend('q');
q.append('w');
q.append('e');
q.append('r');
q.append('t');
q.append('y');
q.append('u');
q.append('i');
q.append('o');
q.insert('xxx', 7);
q.append('qqqqqqqqqqqqqq');
q.pop();
q.unshift();

console.log('L146 q ===', q);

/*
'L146 q ===' SingleLinkedList {
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
                value: 'xxx',
                    next: Node {
                  value: 'i',
                      next: Node { value: 'o', next: null },
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
  ['__proto__']: {
    constructor: ƒ SingleLinkedList(),
        prepend: ƒ prepend(),
        append: ƒ append(),
        insert: ƒ insert(),
        pop: ƒ pop(),
        unshift: ƒ unshift(),
        lenght: ƒ lenght()
  }
}
*/
