/**
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let sum = maxSum;

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
};
