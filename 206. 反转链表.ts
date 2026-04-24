/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

//辅助函数：数组转链表
function createList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const dummy = new ListNode();
  let cur = dummy;
  for (const num of arr) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  return dummy.next;
}
//辅助函数：链表转数组
function toArray(head: ListNode) {
  let curNode: ListNode | null = head;
  const arr = [];
  while (curNode !== null) {
    arr.push(curNode.val);
    curNode = curNode.next;
  }
  console.log(arr);
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// // 暴力
// function reverseList(head: ListNode | null): ListNode | null {
//   if (head === null) return null;

//   let curNode: ListNode | null = head;
//   let listLength = 1;

//   while (curNode.next !== null) {
//     listLength++;
//     curNode = curNode.next;
//   }

//   for (let i = 1; i < listLength; i++) {
//     curNode = head;
//     let j = 0;
//     while (curNode.next !== null && j < listLength - i) {
//       let tmp = curNode.val;
//       curNode.val = curNode.next.val;
//       curNode.next.val = tmp;
//       curNode = curNode.next;
//       j++;
//     }

//     toArray(head);
//   }

//   return head;
// }

//反转列表
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let cur = head;
  while (cur !== null) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

let head1 = createList([1, 2, 3, 4, 5]);
// console.log(head1);
let newHead1 = reverseList(head1);
