/*
Write a function reverseWords() that takes a string message and reverses the order of
the words in-place.



*/

var message = 'find you will pain only go you recordings security the into if';
const reverseWords = message => {
  //split message into array by spaces
  let array = message.split(' ');
  //init beginpointer
  let beginPoint = 0;
  //init endpointer
  let endPoint = array.length - 1;
  while (endPoint > beginPoint) {
    //stop swap when endpointer is at begin pointer
    //swap message at begin pointer with endpointer
    swap(array, beginPoint, endPoint);
    beginPoint++;
    endPoint--;
  }
  //join message together
  return array.join(' ');
}

const swap = (array, index1, index2) => {
  // let temp = array[index1];
  // array[index1] = array[index2];
  // array[index2] = temp;
  [array[index1], array[index2]] = [array[index2], array[index1]];
}
console.log(reverseWords(message));

let a = [2, 3];
let b = [3];

[a[0], a[1]] = [a[1], a[0]];
console.log('a', a);
console.log('b', b);

// returns: 'if into the security recordings you go only pain will you find'