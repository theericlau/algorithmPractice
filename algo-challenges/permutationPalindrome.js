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