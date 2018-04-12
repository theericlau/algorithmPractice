/*

Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
Return:

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


};