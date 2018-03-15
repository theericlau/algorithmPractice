/*
Given an array and another array with the rotation of it. Return an array with the index of where the max is after each rotation
ex)
arr = [1,2,3]
rotateArr = [1,1,1,2]

returns
[1, 0, 2, 0]

*/



const getIndexOfMaxAfterRotated = (arr, rotate) => {
  let result = [];
  let max = Math.max(...arr);
  for (let i = 0; i< rotate.length; i++) {
    rotateHelper(arr, rotate[i]);
    result.push(arr.indexOf(max));
  }
  return result;
}

const rotateHelper = (arr, numOfTime) => {
  for (let i = 0; i < numOfTime; i++) {
    arr.push(arr[0]);
    arr.shift();
  }
}

console.log(getIndexOfMaxAfterRotated([1,2,3], [1,1,1,2]));
