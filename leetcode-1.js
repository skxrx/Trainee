/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numberMap = new Map();

  for (let index = 0; index < nums.length; index++) {
    el = nums[index];

    if (numberMap.has(target - el)) return [index, numberMap.get(target - el)];
    else numberMap.set(el, index);
  }

  return [];
};
