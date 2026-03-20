// Each node has:

// next

// random pointer
// You must clone the list without extra space (O(1))

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}

function copyRandomList(head) {
  if (!head) return null;

  let curr = head;

  // Step 1: Clone nodes and insert in between
  while (curr) {
    let copy = new Node(curr.val);
    copy.next = curr.next;
    curr.next = copy;
    curr = copy.next;
  }

  // Step 2: Assign random pointers
  curr = head;
  while (curr) {
    if (curr.random) {
      curr.next.random = curr.random.next;
    }
    curr = curr.next.next;
  }

  // Step 3: Separate lists
  curr = head;
  let newHead = head.next;

  while (curr) {
    let copy = curr.next;
    curr.next = copy.next;
    if (copy.next) {
      copy.next = copy.next.next;
    }
    curr = curr.next;
  }

  return newHead;
}


// Complexity:

// Time: O(n)
// Space: O(1) (no hashmap used)



