// 1. What are the data types supported by JS?
// string, numbers, boolean, null, undefined, symbol
const name = 'Dario' //string
var age = 27 //number
var sex = true //boolean
var workExperience = null //null
var studies
var symbol = symbol() //symbol

// 2. What do break and continue statements do?
// The break statement jumps out of the loop
// The continue statement jumps over one iteration of the loop

// 3. Differences between var, const, and let
// We declare var if we are going to use the variable outside of the block of code. let and const we can only use them within the block of code.
// Var can be reassigned while let and const can be assigned once.
// Const can be muteted

// Var is a sccope defined and it's limited to a function. If you find it outside the function it's global.
// Let is limited to the block. If you call it outside the curly brackets it won't work. It is inside that block, not inside the function.
// Const same thing, however it cannot be changed (it can't be reassigned). It can be muteted.

// 4. Explain the difference between null, undefined or undeclared variables
// Null is a value of a variable and type object. You can check if typeof null, can be a valuable for a variable.
var json = null

// Undefined is a variable that has been declared but no value exist and its type or  itself undefined
var number

// Undeclared variable is a variable that has been declare without the var keyword
nombre = 'Dario'

// 5. What is the differnce between == and ===?
// == test for abstract equality, it does the necessary conversion for doing the equality conversion.
console.log(0 == false) // it will give true

// === equal value and equal type
var num1 = '1'
var num2 = 1
if (num1 === num2) {
    console.log('yes, it is')
} else {
    console.log('no, it is not')
} // it will give not!!!

var num3 = 1
var num4 = 1
if (num3 === num4) {
    console.log('yes, it is')
} else {
    console.log('no, it is not')
} // it will give yes!!!

// 6. Fiaboncci sequence