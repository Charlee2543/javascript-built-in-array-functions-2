function isPalindrome(string) {
  // Start coding here
  const cleanedString = string.toLowerCase();
  const reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;
  }

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false
