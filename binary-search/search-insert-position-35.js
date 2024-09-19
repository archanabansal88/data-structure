/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
    You must write an algorithm with O(log n) runtime complexity.

 * https://leetcode.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  if (target < nums[start]) return 0;
  if (target > nums[end]) return nums.length;

  while (start <= end) {
    let mid = Math.floor(start + end) / 2;
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};
