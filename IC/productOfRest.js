/*
You have an array of integers, and for each index you want to  nd the product of every integer except the integer at that index.



Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
For example, given:
[1, 7, 3, 4]
your function would return:
   [84, 12, 28, 21]
by calculating:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]
Do not use division in your solution.
Gotchas
Does your function work if the input array contains zeroes? Remember—no division. We can do this in O(n) time and O(n) space!
We only need to allocate one new array of size n.

*/
//Naive Solution O(n^2) time O(n) space
const productOfRest = array => {
  let newArray = [];
  //loop into array keep tracker of current
  for (let i = 0; i < array.length; i++) {
    newArray[i] = 1;
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        newArray[i] *= array[j];
      }
    }
  }
  //loop into length of the array and if tracker is equal to tracker don't multiply
  return newArray;
}

console.log(productOfRest([1, 7, 3, 4]))
//One pass O(n) time O(n) space

const productOfRestMod = array => {
  let newArray = [];
  let prevSum = 1;
  //loop into array and set current index of newArray to the prevSum
  //loop again into the array starting from back
    //multiply current index of newArray with after the number;
  return newArray;
}