/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/
const merge = (array1, array2) => {
  //combinedArray
  let combinedArray = [];
  //one index
  let index1 = 0;
  //two index
  let index2 = 0;
  //if array1 is smaller than array2
  while (combinedArray.length !== (array1.length + array2.length)){
    if (array1[index1] < array2[index2] || !array2[index2]){
      //push array1 into the combined array
      //increment oneindex
      combinedArray.push(array1[index1]);
      index1 += 1;
      //else if array1 is greater than array 2
    } else {
      //push array2 into combined array
      //increment two index
      combinedArray.push(array2[index2]);
      index2 +=1;
    }
  }
  //return the combined array
  return combinedArray;
}

const mergeSort = array => {
  if (array.length < 2){
    return array;
  }
  debugger;
  var leftHalf = array.slice(0, array.length / 2);
  var rightHalf = array.slice(array.length / 2);
  let leftSide = mergeSort(leftHalf);
  let rightSide = mergeSort(rightHalf);
  return merge(leftSide, rightSide);
}
arr = [1, 10, 3, 5, 8, 14, 2]
// 1, 10 , 3, 5         8 , 14 ,2
// 1 10         3, 5
// 1       10




// console.log(arr.length/2);
// console.log(arr.slice(0, arr.length / 2))
// console.log(arr.slice(arr.length / 2))

// console.log(mergeSort([1,10,3,5,8,14,2]));
console.log(merge([1,6,8,12], [3,7,8,9,24]));
//Time Complexity O(n);