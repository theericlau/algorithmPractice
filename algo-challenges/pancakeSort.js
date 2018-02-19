/*
Pancake Sort
Given an array of integers arr:

Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
Write a function pancakeSort(arr) that sorts and returns the input array.You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.


input:  arr = [1, 5, 4, 3, 2]

output: [1, 2, 3, 4, 5]

*/

function pancakeSort(arr) {
  // your code goes here
  //endpointer = array.length - 1;
  let beginpointer = 0;
  let endpointer = arr.length - 1;
  //loop in to array
  for (let i = 0; i < arr.length; i++) {
    //find largestNumber in array
    let k = findLargest(arr.slice(i)) + i;
    //flip
    console.log(k, 'k', arr);
    flip(arr.slice(i), k);
    console.log('first flip', arr);
    //first index of array swap with endpointer
    let temp = arr[beginpointer];
    arr[beginpointer] = arr[endpointer]
    arr[endpointer] = temp;
    console.log('switch', arr);
    flip(arr.slice(i), arr.length - 1);
    console.log('second flip', arr);
    //decrement the endpointer
    endpointer--;
    //check for next largest number
  }
  return arr;
}

const findLargest = arr => {
  let maxNumIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[maxNumIndex] < arr[i]) {
      maxNumIndex = i;
    }
  }
  console.log(maxNumIndex, 'maxNumIndex');
  return maxNumIndex;
}

const flip = (arr, k) => {
  //endpoint = k
  let endpoint = k;
  //beginpoint = 0
  let beginpoint = 0;
  //stop when end = begin
  while (endpoint >= beginpoint) {
    let temp = arr[beginpoint];
    arr[beginpoint] = arr[endpoint];
    arr[endpoint] = temp;
    endpoint--;
    beginpoint++;
  }
  //flip will take k swap with first index
  //decrement k
  //increment beginpoint

  //return array
  return arr;
}

arr = [1, 3, 5, 2, 4]

console.log(pancakeSort(arr))