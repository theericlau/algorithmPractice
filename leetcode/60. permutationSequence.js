/*

The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.
Example 1:

Input: n = 3, k = 3
Output: "213"
Example 2:

Input: n = 4, k = 9
Output: "2314"

*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  //n is the number from
  //init the n permutation
  debugger;
  let values = "";   //123
  let result = [];
  for (let i = 1; i <= n; i++) {
    values = values + i;
  };
  const permute = (currentPermutation, currentValues) => {
    if (currentValues.length === 0) {
      result.push(currentPermutation);
      return;
    }
    for (let i = 0; i < currentValues.length; i++) {
      let current = currentValues[i];
      let newValue = currentValues.slice(0, i) + currentValues.slice(i+1);  //
      permute(currentPermutation + current, newValue);  //1, 23
    }
  }
  permute("", values);  //"", 3
  return result[k];
};

console.log(getPermutation(3, 3));