/*Javascript for in statement loops through the properties of an object. Javascript for in statement loops through the variable or index of an object.
Do not use for in over an Array if the index order is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.*/
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  console.log(x);
}