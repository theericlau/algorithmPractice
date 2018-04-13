/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

  let max = 1;//1
  let string = s[0]; //p
  for (let i = 0; i < s.length;i++) {
    let current = 1;  //1
    let obj = {};
    obj[s[i]] = 1; //p: 1 w: 1
    for (let j = i + 1; j < s.length; j++ ){ //w 2
      if (obj.hasOwnProperty(s[j])){  //
        if (current > max){
          max = current;
          string = s.substring(i, i + current)  //0,3
        }
        break;
      } else {
        current ++;
        obj[s[j]] = 1;
      }
    }
  }
  return string;
};

string1 = "abcabcbb";
string2 = "bbbbb";
string3 = "pwwkew";

console.log(lengthOfLongestSubstring(string1))
console.log(lengthOfLongestSubstring(string2))
console.log(lengthOfLongestSubstring(string3))