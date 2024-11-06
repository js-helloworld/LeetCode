/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 最长子串不会有重复字符
  let max = 0;
  let start = 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      start = Math.max(map.get(s[i]) + 1, start);
    }
    map.set(s[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
};
// @lc code=end

