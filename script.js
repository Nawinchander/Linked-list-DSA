/// Create a Node & Linked List

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}


/// Insert at Beginning

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
}

// Example
let list = new LinkedList();
list.insertAtBeginning(10);
list.insertAtBeginning(20);

console.log(list);

// output 20 - > 10


//// Insert at End

insertAtEnd(data) {
  let newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return;
  }

  let temp = this.head;
  while (temp.next) {
    temp = temp.next;
  }

  temp.next = newNode;
}

/// Output: 20 -> 10 -> 30

//// Traverse (Print List)

printList1() {
  let temp = this.head;
  let result = "";

  while (temp) {
    result += temp.data + " -> ";
    temp = temp.next;
  }

  console.log(result + "null");
}

///output 20 -> 10 -> 30 -> null



/// Delete a Node

delete(data) {
  if (!this.head) return;

  // If head needs to be deleted
  if (this.head.data === data) {
    this.head = this.head.next;
    return;
  }

  let temp = this.head;

  while (temp.next && temp.next.data !== data) {
    temp = temp.next;
  }

  if (temp.next) {
    temp.next = temp.next.next;
  }
}

/// example

list.delete(10);
list.printList();

/// output

// 20 -> 30 -> null




