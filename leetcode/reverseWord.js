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
const reverse = (x) => {
  if (Math.sign(x) === -1) {
    return reverseNumber(Math.abs(x)) * -1;
  } else {
    return reverseNumber(x);
  }
};

const reverseNumber = (x) => {
  let num = x.toString().split('');
  let begin = 0;
  let end = num.length-1;
  while (end > begin) {
    [num[begin], num[end]] = [num[end],num[begin]];
    begin++;
    end--;
  }
  return Number(num.join(''));
}

console.log(reverse(-123456));