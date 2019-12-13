/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * param {ListNode} head
 * return {ListNode}
 */
// Reverse a singly linked list.

// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

var reverseList = function(head) {
  let curr = head;
  let prev = null;
  let next = null;
  
  while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  
  return prev;
};