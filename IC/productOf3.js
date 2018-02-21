/*
Given an array of integers,

fnd the highest
product you can get from three of the integers.
The input arrayOfInts will always have at least three integers.

Gotchas
Does your function work with negative numbers? If arrayOfInts is [−10, −10, 1, 3, 2] we should
return 300 (which we get by taking −10 ∗ −10 ∗ 3).
We can do this in O(n) time and O(1) space.



*/

const arr = [-10, -10, 1, 3, 2];

const productOf3 = (arr) => {
  //keep track of the smallest
  let smallest = Math.min(arr[0], arr[1]);
  //keep track of the highest
  let highest = Math.max(arr[0], arr[1]);
  //keep track of the product of first 3
  let product3 = arr[0] * arr[1] * arr[2];
  //keep track of the min product of 2
  let minProd2 = arr[0] * arr[1];
  //keep track of the high product of 2
  let maxProd2 = arr[0] * arr[1];
  //loop into the array and
  for ( let i = 2; i < arr.length; i++) {
    //check if current times the highprod2 or lowprod2 is greater than higher
    let current = arr[i];

    minProd2 = Math.min(minProd2, current * smallest);
    maxProd2 = Math.max(maxProd2, current * highest);

    if (product3 < minProd2 * current) {
      product3 = minProd2 * current;
    }
    if (product3 < maxProd2 * current) {
      product = maxProd2 * current;
    }
      //if true then set highprod3 to it
    smallest = Math.min(current, smallest);
    highest = Math.max(current, highest);
  }
  //return high3
  return product3;
}

