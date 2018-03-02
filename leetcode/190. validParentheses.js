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
  //loop into the string
    //if current is in the object then push into stack
    //else
      //pop the most recent add into stack
      //check if the popped off string is equal to current
  //if stack is empty then 
    //return true
  // else 
    //return false
}