function oddNumbers(l, r) {
  let arr = [];
  for (let i = l; i <= r; i++) {
    if (i % 2) {
      arr.push(i);
    }
  }
  return arr;
}


function findNumber(arr, k) {
  if (arr.indexOf(k) >= 0) {
    return 'YES'
  } else {
    return 'NO'
  }
}
