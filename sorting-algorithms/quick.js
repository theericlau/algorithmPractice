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
  let pivot = array[array.length - 1];
  let left, right;

  array = partition(array);
  let newIndex = array.indexOf(pivot);
  if (array.length !== 0) {
    left = partition(array.slice(0, newIndex));
    right = partition(array.slice(newIndex, array.length));
  }
  return [...left, ...right];
}

const partition = (array, start, end) => {
  let startIndex = start || 0;
  let endIndex = end || array.length - 1;
  // console.log('i get in here')

  for (let i = 0; startIndex < endIndex ; i++ ) {
    // console.log('start', startIndex, 'end', endIndex);
    if (array[endIndex] >= array[startIndex]) {
      //we continue loop
      startIndex++;
    } else {
      //we swap end with current
      array = swap(array, startIndex, endIndex);
      // console.log('first', array);
      //we swap currentIndex with end - 1
      array = swap(array, startIndex, endIndex - 1);
      // console.log('second', array)
      endIndex--;
    }
    // if end index is less than current index
  }
  return array;
}

const swap = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

const example = [2,7,3,9,6,4,5];
console.log(quickSort(example));

//why quickSort - worst case is n^2 but its really unlikely
//the reason why its nlogn is the n is looping thru entire array