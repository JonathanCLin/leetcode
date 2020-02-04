// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, 
// such that there is a bijection between a letter in pattern and 
// a non-empty word in str.

// Example 1:
// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true

// Example 2:
// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false

// Example 4:
// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false

// Notes:
// You may assume pattern contains only lowercase letters, 
// and str contains lowercase letters that may be separated by a single space.

var wordPattern = function(pattern, str) {
  let pairs = {};
  let strArr = str.split(" ");
  
  if (pattern.length !== strArr.length) {
      return false;
  }
  
  for (let i = 0; i < pattern.length; i++) {
      if (!pairs[pattern[i]] && Object.values(pairs).indexOf(strArr[i]) === -1) {
          pairs[pattern[i]] = strArr[i];
      } else if (pairs[pattern[i]] !== strArr[i]) {
          return false;
      }
  }
  return true;
};