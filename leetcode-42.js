/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (number) {
  if (!number.length) return 0;
  let result = 0;
  let left = 0,
    right = number.length - 1;
  let maxLeft = 0,
    maxRight = 0;

  while (left <= right) {
    if (number[left] <= number[right]) {
      if (number[left] >= maxLeft) maxLeft = number[left];
      else result += maxLeft - number[left];
      left++;
    } else {
      if (number[right] >= maxRight) maxRight = number[right];
      else result += maxRight - number[right];
      right--;
    }
  }
  return result;
};
