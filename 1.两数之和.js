/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numsMap = new Map();
  for(let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if(numsMap.has(diff)) {
      return [numsMap.get(diff),i]
    }
    numsMap.set(nums[i],i)
  }

};