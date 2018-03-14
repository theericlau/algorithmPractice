/*
Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".


*/

/**
 * @param {string} str
 * @returns {string}
 */

s = "the sky is blue"

var swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]]
}
var reverseWordsSwap = function (str) {
  //split the string by the spaces
  var array = str.split(' ');
  //keep track of begin and end;
  console.log(array);
  let begin = 0;
  let end = array.length - 1;
  //while the begin and end are not equal
  while (begin < end) {
    //swap begin and end
    swap(array, begin, end);
    begin++;
    end--;
  }
  //join the array;
  return array.join(' ');
};

var reverseWords = function (str) {
  //split the string by the spaces
  var array = str.split(' ');
  var string = '';
  //keep track of begin and end;
  let end = array.length - 1;
  for (let i = end; i >= 0; i--) {
    if (array[i].length === 0) {
      continue;
    }
    string += ' ' + array[i];
  }
  //join the array;
  return string.trim();
};


console.log(reverseWords(s))