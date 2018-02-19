/**
 * @param {number} x
 * @return {number}
 *
 *
 *
Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
 */
var reverse = function (x) {
  if (Math.sign(x) === -1) {
    return reverseNumber(Math.abs(x)) * -1;
  } else {
    return reverseNumber(x);
  }
};

console.log(reverse(-123));