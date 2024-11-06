/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const keyMap = {
    '(':-3,
    '{':-2,
    '[':-1,
    ']':1,
    '}':2,
    ')':3,
  }
  const len = s.length;
  if(keyMap[s[0]] > 0 || len % 2 === 1) return false;
  const stack = [s[0]];
  for(let i = 1; i < len; i++) {
    if (keyMap[stack[stack.length-1]] + keyMap[s[i]] === 0) {
      stack.pop();
    }else if(keyMap[s[i]] > 0) {
      return false
    }else {
      stack.push(s[i])
    }
  }
  return stack.length === 0;

};
// @lc code=end

