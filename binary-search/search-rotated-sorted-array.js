/**
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
    You must write an algorithm with O(log n) runtime complexity.

 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * Example 1:
        Input: nums = [4,5,6,7,0,1,2], target = 0
        Output: 4

    Example 2:
        Input: nums = [4,5,6,7,0,1,2], target = 3
        Output: -1

 */

var search = function (nums, target) {
  if (nums.length === 0) return -1;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + end) / 2;
    if (target === nums[mid]) return mid;
    if (nums[mid] > nums[start]) {
      if (target <= nums[mid] && target >= nums[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target >= nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
