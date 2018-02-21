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
  //keep track of the highest
  //keep track of the product of first 3
  //keep track of the min product of 2
  //keep track of the high product of 2
  //loop into the array and
    //check if current times the highprod2 or lowprod2 is greater than higher
      //if true then set highprod3 to it
  //return high3
}

