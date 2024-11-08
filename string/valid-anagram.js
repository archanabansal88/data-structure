/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const str1 = s.split(" ").join("").toLowerCase();
  const str2 = t.split(" ").join("").toLowerCase();
  if (str1.length !== str2.length) return false;
  let obj = {};

  for (let i = 0; i < str1.length; i++) {
    if (!obj[str1[i]]) {
      obj[str1[i]] = 1;
    } else {
      obj[str1[i]] += 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i]]) {
      obj[str2[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("hello world", "world     h  ello"));
console.log(isAnagram("hello", "world"));
