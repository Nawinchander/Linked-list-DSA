/// Remove Nth Node From End

/// Use two pointers with gap = n

function removeNthFromEnd(head, n) {
  let dummy = new Node(0);
  dummy.next = head;

  let first = dummy;
  let second = dummy;

  // Move first n+1 steps ahead
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  // Move both until first reaches end
  while (first) {
    first = first.next;
    second = second.next;
  }

  // Delete node
  second.next = second.next.next;

  return dummy.next;
}


// Complexity:
// Time: O(n)
// Space: O(1)




