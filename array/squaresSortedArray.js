/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (arr) {
  let sortedArr = [];
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let start = Math.abs(arr[left]);
    let end = Math.abs(arr[right]);
    if (start < end) {
      sortedArr.unshift(end * end);
      right--;
    } else {
      sortedArr.unshift(start * start);
      left++;
    }
  }
  return sortedArr;
};
