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

printList() {
  let temp = this.head;
  let result = "";

  while (temp) {
    result += temp.data + " -> ";
    temp = temp.next;
  }

  console.log(result + "null");
}

///output 20 -> 10 -> 30 -> null





