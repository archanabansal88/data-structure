/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxValue = 0;

  while (left <= right) {
    let width = right - left;
    let area = Math.min(height[left], height[right]) * width;
    maxValue = Math.max(area, maxValue);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxValue;
};
