/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length
  let n = 0
  for (let i = 1;i < len;i++) {
    if (nums[i] !== nums[n]) { 
      nums[++n] = nums[i];
    }
  }
  return n + 1
};
// @lc code=end

