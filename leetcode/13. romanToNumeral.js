// Given a roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let numeral = s.split('');
  let total = 0;
  let roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  for (let i = 0; i < numeral.length; i++) {
    let current = numeral[i];
    let next = numeral[i+1];
    if (roman[next] <= roman[current] || i === numeral.length - 1) {
      total += roman[current];
    } else {
      total -= roman[current];
    }
  }
  return total;
};

console.log(romanToInt('MMXIV'));
console.log(romanToInt('MCMXC'));
console.log(romanToInt('MCMLIV'));
console.log(romanToInt('MDCCLXXVI'));