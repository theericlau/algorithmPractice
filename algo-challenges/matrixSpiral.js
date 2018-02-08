/*

Matrix Spiral Copy
Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should return that array. Analyze the time and space complexities of your solution.

Example:

input:  inputMatrix  = [ [1,    2,   3,  4,    5],
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]

output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
See the illustration below to understand better what a clockwise spiral order looks like.

alt Clockwise spiral order

Constraints:

[time limit] 5000ms

[input] array.array.integer inputMatrix

1 ≤ inputMatrix[0].length ≤ 100
1 ≤ inputMatrix.length ≤ 100
[output] array.integer

*/

function spiralCopy(inputMatrix) {
  // your code goes here
  let array = [];
  let endIndex = inputMatrix[0].length - 1;
  let endRow = inputMatrix.length - 1;
  let beginningIndex = 0;
  let beginningRow = 0;

  //repeat while end > beginning
  while (endIndex > beginningIndex || endRow > beginningRow) {
    // loop into the array
    for (let i = beginningIndex; i <= endIndex; i++ ) {
      //push each index in
      array.push(inputMatrix[beginningRow][i]);
    }
    //loop into each index of inputMatrix starting at next index
    for (let i = beginningRow + 1; i <= endRow; i++ ) {
      //push each index at the endIndex in
      array.push(inputMatrix[i][endIndex]);
      //decrement endIndex pointer
    }
    endIndex--;
    beginningRow++;
    for (let i = endIndex; i >= beginningIndex ; i--){
      array.push(inputMatrix[endRow][i]);
    }
    //loop into each array starting from the last array of inputMatrix
    for (let i = endRow - 1; i >= beginningRow; i--) {
      //push initial pointer at each array in
      array.push(inputMatrix[i][beginningIndex]);
    }
    endRow--;
    beginningIndex++
  }
  return array;
}

inputMatrix = [[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20]]

console.log(spiralCopy(inputMatrix));


//CORRECT IMPLMENTATION
// function spiralCopy(inputMatrix):
//     numRows = inputMatrix.length
//     numCols = inputMatrix[0].length

//     topRow = 0
//     btmRow = numRows - 1
//     leftCol = 0
//     rightCol = numCols - 1
//     result = []

//     while (topRow <= btmRow AND leftCol <= rightCol):
//         # copy the next top row
//         for i from leftCol to rightCol:
//             result.push(inputMatrix[topRow][i])
//         topRow++

//         # copy the next right hand side column
//         for i from topRow to btmRow:
//             result.push(inputMatrix[i][rightCol])
//         rightCol--

//         # copy the next bottom row
//         if (topRow <= btmRow):
//             for i from rightCol to leftCol:
//                 result.push(inputMatri[btmRow][i])
//             btmRow--

//         # copy the next left hand side column
//         if (leftCol <= rightCol):
//             for i from btmRow to topRow:
//                 result.push(inputMatrix[i][leftCol])
//             leftCol++

//     return result