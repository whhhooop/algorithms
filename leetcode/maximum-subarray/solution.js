/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let bestSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    bestSum = Math.max(sum, bestSum);
  }

  return bestSum;
};
