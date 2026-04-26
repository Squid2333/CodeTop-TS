//难，记得看

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let groupPrev: ListNode = dummy;

  while (true) {
    const kth = getKth(groupPrev, k);
    if (kth === null) break;

    const groupNext = kth.next;

    // 反转 [groupPrev.next ... kth]
    let prev: ListNode | null = groupNext;
    let cur = groupPrev.next;

    while (cur !== groupNext) {
      const next = cur!.next;
      cur!.next = prev;
      prev = cur;
      cur = next;
    }

    const oldGroupStart = groupPrev.next as ListNode;
    groupPrev.next = kth;
    groupPrev = oldGroupStart;
  }

  return dummy.next;
}

function getKth(node: ListNode | null, k: number): ListNode | null {
  while (node !== null && k > 0) {
    node = node.next;
    k--;
  }
  return node;
}
function showList(head: ListNode | null): void {
  const arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr);
}
function toListNode(arr: number[]) {
  if (arr.length === 0) return null;
  const dummy = new ListNode();
  let cur = dummy;
  for (const num of arr) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  return dummy.next;
}

const head = [1, 2, 3, 4, 5];
showList(toListNode(head));
showList(reverseKGroup(toListNode(head), 2));
