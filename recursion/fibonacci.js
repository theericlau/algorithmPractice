/*

Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.

Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

const fibonacci = n => {
  if (n === 0) {
    return 0;
  } else if ( n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(9));


const fibonacciMemo = n => {
  let memoizedN = {0: 0, 1:1}
  let fibonacci = (nLeft) => {
    if (memoizedN.hasOwnProperty(nLeft)){
      return memoizedN[nLeft];
    } else {
      let result = fibonacci(nLeft - 1) + fibonacci(nLeft - 2);
      memoizedN[nLeft] = result;
      return memoizedN[nLeft];
    }
  }
  return fibonacci(n);
  // return memoizedN[n - 1] + memoizedN[n - 2];
}

const fibonacciMemo2 = n => {
  let memoizedN = { 0: 0, 1: 1 }
  let fibonacci = (nLeft) => {
    if (!memoizedN.hasOwnProperty(nLeft)) {
      memoizedN[nLeft] = fibonacci(nLeft - 1) + fibonacci(nLeft - 2);
    }
    return memoizedN[nLeft];
  }
  return fibonacci(n);
  // return memoizedN[n - 1] + memoizedN[n - 2];
}

console.log(fibonacciMemo2(9));
