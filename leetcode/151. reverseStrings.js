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

var swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]]
}
var reverseWords = function (str) {
  //split the string by the spaces
  //keep track of begin and end;
  //while the begin and end are not equal
    //swap begin and end

  //join the array;
};