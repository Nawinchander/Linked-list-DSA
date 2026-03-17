///// Merge Two Sorted Linked Lists

/// Compare nodes and build a new sorted list

function mergeTwoLists(l1, l2) {
  let dummy = new Node(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.data < l2.data) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;

  return dummy.next;
}


// Complexity:
// Time: O(n + m)
// Space: O(1)


