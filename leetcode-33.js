/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] == target) return middle;
    if (nums[left] <= nums[middle]) {
      if (target >= nums[left] && target < nums[middle]) {
        console.log(left, right);
        right = middle;
        console.log(left, right);
      } else {
        console.log(left, right);
        left = middle + 1;
        console.log(left, right);
      }
    } else {
      if (target > nums[middle] && target <= nums[right]) {
        console.log(left, right);
        left = middle + 1;
        console.log(left, right);
      } else {
        console.log(left, right);
        right = middle;
        console.log(left, right);
      }
    }
  }

  return nums[left] == target ? left : -1;
};
