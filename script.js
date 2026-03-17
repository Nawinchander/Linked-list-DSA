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






