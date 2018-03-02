/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s) => {
  const match = {
    '{' : '}',
    '[' : ']',
    '(' : ')',
  };
  //init a stack
  let stack = [];
  //loop into the string
  for (let i = 0; i < s.length; i++ ) {
    let current = s[i];
    //if current is in the object then push into stack
    if (match.hasOwnProperty(current)) {
      stack.push(current);
    } else {
      //else
        //pop the most recent add into stack
        //check if the popped off string is equal to current
      let lastIndex = stack.pop();
      if (match[lastIndex] !== current) {
        return false;
      }
    }
  }
  //if stack is empty then
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isValid('([)]'))