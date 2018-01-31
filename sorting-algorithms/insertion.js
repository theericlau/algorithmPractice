/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

const insertion = array => {
  //for each index
  for (let i = 1; i < array.length; i++) {
    // debugger;
    //if index is smaller than the previous swap
    let k = i;
    while (k !== 0 || array[k] < array[k - 1]) {
      if (array[i] < array[i - 1]) {
        swap(array, k, k - 1)
      }
      k--
    }
  }
  return array;
}

const swap = (array, smallerValueIndex, biggerValueIndex) => {
  let temp = array[smallerValueIndex];
  array[smallerValueIndex] = array[biggerValueIndex];
  array[biggerValueIndex] = temp;
  return array;
}

console.log(insertion([5,2,3,4,8]));

//Time Complexity O(n^2)