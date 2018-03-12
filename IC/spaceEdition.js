/*
Find a duplicate, Space EditionTM.We have an array of integers, where:
1. The integers are in the range 1..n 2. The array has a length of n + 1


It follows that our array has at least one integer which appears at least twice.But it may have several duplicates, and each duplicate may appear more than twice.
Write a function which  nds an integer that appears more than once in our array. (If there are multiple duplicates, you only need to  nd one of them.)
We're going to run this function on our new, super-hip Macbook Pro With Retina DisplayTM. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM.So we need to optimize for space!


*/

//Naive Solution

const duplicate = array => {
  //initialize the object which will count whether its in the object already
  const track = {};
  const repeat = [];
  //loop in to the array
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    //keep track of how many times the in
    if (track[current]) {
      repeat.push(current);
    }
    else {
      track[current] = true;
    }
    //if number was already seen move into an array repeated object

  }
  return repeat;
}

//Simplify

const test = [1,2,3,4,5,6,7,1,2]
const duplicateSimple = array => {
  const track = {};
  return array.filter( curr => {
    if (track[curr]){
      return true
    } else {
      track[curr] = true;
      return false
    }
  });
}

const duplicateSpace = array => {
  array
  .sort((a, b) => {
    return a - b;
  })
  let next = 0;
  return array;
}

// console.log(duplicateSimple(test));
console.log(duplicateSpace(test));