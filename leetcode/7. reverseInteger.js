/*
7. Reverse Integer
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows2™

*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let negative = x < 0 ? true : false;
  let newX = Math.abs(x).toString();
  let start = 0;
  let end = newX.length - 1;
  while (end > start) {
    newX = swap(start, end, newX);
    end--;
    start++;
  }
  return negative ? Number(newX) * -1 : Number(newX);
};

var swap = (begin, end, x) => {
  let start = x.slice(0, begin);
  let mid = x.slice(begin+1, end);
  let last = x.slice(end + 1);
  return start.concat(x[end],mid,x[begin], last);
};

console.log(reverse(-123456));
// console.log(swap(2, 4, '123456'));