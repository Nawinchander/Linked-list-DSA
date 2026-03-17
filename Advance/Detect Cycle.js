/// Detect Cycle (Floyd’s Algorithm)
/// Use slow & fast pointers (Tortoise & Hare)

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}


// Complexity:
// Time: O(n)
// Space: O(1)
