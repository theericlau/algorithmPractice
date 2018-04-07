/*Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/
var string = "(){}[]";
var string1 = "([])"
var string2 = "([)]"

var isValid = (s) => {
  const match = {
    ')':'(',
    ']':'[',
    '}': '{'
  }
  let stack = [];
  if (s.length === 0 || s.length % 2 === 1){
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (match[s[i]]){
      if (stack[stack.length -1 ] !== match[s[i]]) {
        return false
      }
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? true : false;
}

console.log(isValid(string1));