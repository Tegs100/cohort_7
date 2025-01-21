/* Variable in javascript 
There are three ways to create a variable in Javascript
1. var
2. let
3. const*/
var x = 10 // creating a variable 
var y = 20 // creating a variable with var

let z = 30 // creating a variable with let is better than creating a variable with var
let w = 38

const t = 34 // the third way of declaring or assigning a variable in Javascript
const i = 9 // the const variable doesn't change

/* The _var key word was used in the beginning of the creation of Javascript (1995). 
The _let and _const was introduced in the 2005 and 2006 to make it welcoming for new programmers.
The _let variable makes you create a variable without assigning a value to it.
*/
let x;
x = 20;
// The variable in _let is mutable 
x = 30;
// Javascript is syncronous 

const b = 20 // _const Keyword is not immutable
// You cannot assign an undefined variable to assign it later in Javascript

/* Data types in Javascript
 There are different types of data in Javascript 
 There are two main types of data type in Javascript (a) Primitive  (b) Composite (meaning composing of one or more primitive data type) 

 * Primitive data type 
 1. Number 
 2. String (words in English)
 3. Boolean (consist of True and False)
 4. Undefined (null or not assigned a value)
*/
// Unlike Python that uses print(), Javascript uses console.log().

/* Composite data type
This means it compose of one, two or more primitive data type
* Array: is a list of number, strings, boolean (just as in python). The array uses the square bracket as its symbols ([]). An array (list in Python) is mutable unlike Python that is immutable. An Array is a composite data type
*/
const myStudent = ["Johnson","John","Amaka", 36, 90, true, undefined];// An array is composite data type as it contains two or more primitive data type

/* Object: is a used to assign a key with a value. It is like dictionary in python. Object uses curly braces ({}) to create an object in Javascript 
*/ 
const firstStudent = {
  name: "Johnson", // the name is the key and "Johnson" is the variable
  age: 24,
  married: false,
  lga: undefined,
};
const secondStudent = {
  name: "Amaka",
  age: 20,
  married: True,
  lga: "Orlu",
};

/* An object is like a pronoun while array is noun 
 An array can be nested in an object and an object can be nested in an array 
 Indexing in Array
Same as in Python items are indexed from 0 - infinity, but there are no negative indexing in Javascript unlike Python.
*/
/* To get items in an array we use the index of the item 
Example: const myStudent = ["Johnson","John","Amaka", 36, 90, true, undefined];
         console.log(mystudent[1])// This would console.log "John", which is index 1
 */