// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

function reverseNumber(n) {
 let num = parseFloat(n.toString().split('').reverse().join(''))
 //multiply the reversed with the positive or negative of the original number passed through the function to keep the sign
 return num *Math.sign(n)
}
