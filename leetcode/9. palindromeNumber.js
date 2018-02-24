/**
 * @param {number} x
 * @return {boolean}
 *
 * Determine whether an integer is a palindrome. Do this without extra space.
 */
var isPalindrome = function (x) {
  let number = x.toString().split('');
  let begin = 0;
  let end = number.length - 1;
  console.log(number);
  while (end > begin) {
    if (number[begin] !== number[end]) {
      return false;
    }
    begin++;
    end--;
  }
  return true;
};

console.log(isPalindrome(20));