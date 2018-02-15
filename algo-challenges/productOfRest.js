// input [1, 7, 3, 4]
// output [84, 12, 28, 21]
// output looks like [7 * 3 * 4, 1 * 3 * 4, 1 * 7 * 4, 1 * 7 * 3]

//get product of all index in array except current

/*
function repalceWithOtherProducts: array of integers
  Initialize momorize object: memoizedSolutions

  function multiplySubarray: array, lowIndex, highIndex
    if the combination of  lowIndex and highIndex is memoized
      return memoizedSolutions.get(lowIndex, highIndex)

    if lowIndex == highIndex
     return the number at lowIndex
    return array[lowIndex] * multiplySubarray with lowIndex + 1 and same highIndex


  results = [];
  for each element in input array
    results[i] = multiplySubarray(c, 0, currentIndex - 1) * multiplySubarray(array, currentIndex + 1, array.length)

  return results
*/

function replaceWithOtherProducts(nums) {
  const memoizedSolutions = {};

  function multiplySubarray(nums, low, high) {
    if (memoizedSolutions.hasOwnProperty('' + low + high)) {
      return memoizedSolutions['' + low + high];
    }
    if (low > high) {
      return 1;
    }
    if (low === high) {
      return nums[low];
    }

    memoizedSolutions['' + low + high] = nums[low] * multiplySubarray(nums, low + 1, high);
    return memoizedSolutions['' + low + high];
  }

  const results = [];
  for (let i = 0; i < nums.length; i += 1) {
    results[i] = multiplySubarray(nums, 0, i - 1) *
      multiplySubarray(nums, i + 1, nums.length - 1);
  }
  return results;
};

console.log(replaceWithOtherProducts([1, 7, 3, 4]), 'should equal [84, 12, 28, 21]')

/*memoizedSolutions = {
  13:
  23:
}*/
// nums = [1, 7, 3, 4]
// resutls = [];
/*
i = 1
1 *

low = 1
high = 3

*/


