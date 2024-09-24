/**
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let newStr = s.replace(/[^A-Za-z0-9]/g, "");
  let i = 0;
  let j = newStr.length - 1;
  while (i <= j) {
    if (newStr[i].toLowerCase() === newStr[j].toLowerCase()) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
