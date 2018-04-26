/*
Write an efficient function that checks whether any permutation of an input string is a palindrome
*/

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

// input: string
// output:boolean, true if there is palindrome false otherwise

/*
hasPalindrome: string s
  Initialize counter object

  For each character in s
    Increment count of current character in counter object

  Set oddOccurances to 0
  For each property in counter
    if value at current property was odd
      Increment oddOccurances by 1

  if oddOccurances was 1 or less return true
  otherwise return false
*/


//One Implementation
function hasPalindrome(s) {
  if (s.length === 0) {
    return false;
  }
  const counter = {};
  let numOfPairs = 0;

  for (let i = 0; i < s.length; i += 1) {
    counter[s.charAt(i)] = counter[s.charAt(i)] || 0;
    counter[s.charAt(i)] += 1;
    if (counter[s.charAt(i)] % 2 === 0) {
      numOfPairs += 1;
    }
  }

  if (numOfPairs * 2 === s.length || numOfPairs * 2 === s.length - 1) {
    return true;
  } else {
    return false;
  }
}

// console.log(hasPalindrome('civic'), 'should return true');
// console.log(hasPalindrome('c'), 'should return true');
// console.log(hasPalindrome(''), 'should return false');

function hasPalindrome2nd(s) {
  let setOfPairs = new Set();
  if (s.length === 0) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (setOfPairs.has(s[i])){
      setOfPairs.delete(s[i]);
    } else {
      setOfPairs.add(s[i]);
    }
  }
  // console.log(setOfPx/airs);
  if (setOfPairs.size > 1) {
    return false;
  } else {
    return true;
  }
}



console.log(hasPalindrome2nd('civic'), 'should return true');
console.log(hasPalindrome2nd('c'), 'should return true');
console.log(hasPalindrome2nd('ivicc'), 'should return true');
console.log(hasPalindrome2nd('civil'), 'should return false');
console.log(hasPalindrome2nd(''), 'should return false');