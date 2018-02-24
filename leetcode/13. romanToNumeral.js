// Given a roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let numeral = s.split('');
  let total = 0;
  let roman = {
    'i': 1,
    'v': 5,
    'x': 10,
    'l': 50,
    'c': 100,
    'd': 500,
    'm': 1000,
  }
  for (let i = 0; i >= 0; i--) {
    let current = numeral[i];
    let next = numeral[i+1];
    if (roman[next] < roman[current]) {
      total -= roman[next];
    }

  }
};