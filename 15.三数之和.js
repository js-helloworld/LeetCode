/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const arr = []
  nums.sort((a, b) => a - b)
  const len = nums.length
  const existMap = new Map()
  for (let i = 0;i < len;i++) {
    if (nums[i] > 0) {
      break;
    }
    // 去重 a，跳过重复元素
    if (i > 0 && nums[i] == nums[i - 1]) {
        continue;
    }
    let left = i + 1
    let right = len - 1
    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        arr.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[right - 1] === nums[right]){
          right--;
      }
        while (left < right && nums[left + 1] === nums[left]) {
          left++;
        }
        right--;
        left++;
      }
    }
  }
  return arr
};
// @lc code=end

console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([0,1,1]));
// console.log(threeSum([0,0,0]));
