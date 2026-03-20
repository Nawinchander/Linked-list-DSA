
// Reverse Nodes in K-Group (Hard)

// Reverse linked list in chunks of size k.

// 1 → 2 → 3 → 4 → 5, k = 2
// ➡️ 2 → 1 → 4 → 3 → 5


class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function reverseKGroup(head, k) {
  let count = 0;
  let curr = head;

  // Check if k nodes exist
  while (curr && count < k) {
    curr = curr.next;
    count++;
  }

  if (count < k) return head;

  // Reverse k nodes
  let prev = null;
  curr = head;
  let next = null;
  count = 0;

  while (curr && count < k) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    count++;
  }

  // Recursively process remaining list
  if (next) {
    head.next = reverseKGroup(next, k);
  }

  return prev;
}


// Complexity:

// Time: O(n)
// Space: O(n/k) (recursion stack)



