/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let count = 0;

  let map = new Map();
  for (let i = 0; i < nums.length; i++) map.set(nums[i], i);

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i] - k) && map.get(nums[i] - k) !== i) {
      count++;
      map.delete(nums[i] - k);
    }
  }

  return count;
};
