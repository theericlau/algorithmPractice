/*
QUICK SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort
- Identify time complexity

- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

*/
/*1. Choose pivot point, last element
2. Start pivot location at the beginning of the array
Iterate through array and if element <= pivot, swap element before pivot location
*/
const quickSort = array => {

}


function getDifferentNumber(arr) {
  // your code goes here
  // variable that equals the minimum integer has gap
  let smallestInt;
  // sort the array in chronological order
  let newArr = arr.sort((current, next) => {
    if (current < next) {
      return -1;
    } else {
      return 1;
    }
  })
  // loop into the array to check current and the next number
  for (let i = 0; i < newArr.length; i++) {
    //if there's a gap in between
    if (newArr[i + 1] - newArr[i] > 1) {
      //set variable to this index
      smallestInt = newArr[i] + 1;
      break;
    } else if (i === newArr.length - 1) {
      smallestInt = newArr[i] + 1;
    }
  }

  //return the variable
  return smallestInt;
}