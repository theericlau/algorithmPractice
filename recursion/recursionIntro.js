//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
const loop = (n) => {
  //while n is not equal to 0
  while (n !== 0){
    //print out n
    console.log(n);
    //decrement n
    --n;
  }
  //return
  return;
}
// loop(5);
//2. Next, try looping just like above except using recursion
const recurseLoop = (n) => {
  //if n is equal to 0
  if (n === 0) {
    //return 'complete';
    return 'complete'
  }
  //print out n
  console.log(n);
  //return loop into n -1
  return recurseLoop(n-1);
}
// console.log(recurseLoop(5));
//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
const exponent = (base, expo) => {
  // declare sum
  let sum = 1;
  // while exponent is > 0
  while (expo > 0) {
    // sum *= base
    sum *= base;
    // decrement exponent
    --expo;
  }
  console.log(sum);
}
// exponent(5, 2);
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

const recursiveExponent = (base, expo) => {
  if (expo === 0) {
    console.log('hit the quan')
    return 1;
  }
  return base * recursiveExponent(base, expo - 1);
}

// console.log(recursiveExponent(10,0));
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

const recursiveMultiplier = (arr, num) => {
  if (arr.length === 0) {
    return [];
  }
  // debugger;
  return [arr[0] * num].concat(recursiveMultiplier(arr.slice(1), num));
}

console.log(recursiveMultiplier([1,2,3], 5));
//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
const recursiveReverse = array => {
  if (array.length === 0 ) {
    return [];
  }
  return [array[array.length - 1]].concat(recursiveReverse(array.slice(0, array.length - 1)))
}

console.log(recursiveReverse([10, 5, 2]))