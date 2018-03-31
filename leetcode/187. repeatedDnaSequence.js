/*
All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG".When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10 - letter - long sequences(substrings) that occur more than once in a DNA molecule.

For example,

  Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

    Return:
["AAAAACCCCC", "CCCCCAAAAA"].
*/


/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let list = [];
  let hash = {};
  //loop into strings
    //store every substring in hash
    //if exists then increment in hash
  for (let i = 0; i <= s.length - 10; i++) {
    let substring = s.substring(i, i + 10);
    if (!hash[substring]) {
      hash[substring] = 1
    } else {
      if (hash[substring] === 1) {
        list.push(substring);
        hash[substring]++
      }
    }
  }
  //loop in hash to check which dna has multiple
  // for (let substring in hash) {
  //   if (hash[substring] > 1) {
  //     list.push(substring);
  //   }
  // }
  //return list
  return list;
};

let test = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
let test2 = "AAAAAAAAAAA";
console.log(findRepeatedDnaSequences(test));
console.log(findRepeatedDnaSequences(test2));