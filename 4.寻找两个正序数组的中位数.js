/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const isOs = (len1 + len2) % 2 === 0;
  const poivt = isOs ? Math.ceil((len1 + len2) / 2) + 1 : Math.ceil((len1 + len2) / 2)

  let idx1 = 0, idx2 = 0;
  const nums3 = []
  for (let i = 0;i < poivt;i++) {
    if (!nums1[idx1] && nums1[idx1] !== 0) {
      nums3.push(nums2[idx2])
      idx2++;
    }
    else if (!nums2[idx2] && nums2[idx2] !== 0) {
      nums3.push(nums1[idx1])
      idx1++;
    }
    else if(nums1[idx1] <= nums2[idx2]) {
      nums3.push(nums1[idx1])
      idx1++;
    } else if(nums1[idx1] > nums2[idx2]) {
      nums3.push(nums2[idx2])
      idx2++;
    }
  }
  return isOs ? (nums3[poivt - 1] + nums3[poivt - 2]) / 2 : nums3[poivt - 1]

};
