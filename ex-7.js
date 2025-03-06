/* สร้างจัวเก็บ แยกคำ กลับ รวม เช็คเหมือนกันไหม */
function isPalindrome(stringCurrent) {
	// Start coding here
	let reverseText = stringCurrent.split("").reverse().join("");
	// reverseText.reverse();
	// console.log("reverseText: ", reverseText);
	// console.log("string: ", string);
	return reverseText === stringCurrent;
}
//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
