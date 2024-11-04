/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result: ListNode | null = null,
    tail = null
  let flag = 0
  while (l1 || l2 || flag) {
    let temp = (l1?.val || 0) + (l2?.val || 0) + flag
    flag = temp >= 10 ? 1 : 0
    temp %= 10
    if (!result) {
      result = tail = new ListNode(temp)
    } else {
      tail.next = new ListNode(temp)
      tail = tail.next
    }
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  return result
}
// @lc code=end
