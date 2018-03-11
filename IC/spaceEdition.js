/*
Find a duplicate, Space EditionTM.We have an array of integers, where:
1. The integers are in the range 1..n 2. The array has a length of n + 1


It follows that our array has at least one integer which appears at least twice.But it may have several duplicates, and each duplicate may appear more than twice.
Write a function which  nds an integer that appears more than once in our array. (If there are multiple duplicates, you only need to  nd one of them.)
We're going to run this function on our new, super-hip Macbook Pro With Retina DisplayTM. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM.So we need to optimize for space!


*/

//Naive Solution
const test = [1,2,3,4,5,6,7,1,2]

const duplicate = array => {
  //initialize the object which will count whether its in the object already
  //loop in to the array
    //keep track of how many times the in
    //if number was already seen move into an array repeated object
}