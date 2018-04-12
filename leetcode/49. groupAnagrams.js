/*

Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
Return:

aet  aet

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let array = [];
  for (let i = 0; i < strs.length; i ++) {
    let obj = {};
    for (let j = 0; j < strs[i].length; j++) {
      if (obj.hasOwnProperty(str[i][j])){
        obj[str[i][j]] += 1;
      } else {
        obj[str[i][j]] = 1;
      }
    }
    array.push(obj);
  }

  for (let i = 0; i< array.length; i++) {
    //for each object check if
  }


};

const groupAnagrams2 = strs => {
  let sorted = [];
  let result = {};
  for (let i = 0; i < strs.length; i++) {
    const wordSort = strs[i].split('').sort().join('');
    if (result.hasOwnProperty(wordSort)) {
      result[wordSort].push(strs[i]);
    } else {
      result[wordSort] = [strs[i]];
    }
  }
  for (let key in result) {
    sorted.push(result[key]);
  }
  return sorted;
}

array = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams2(array))