/* Mutating methods are array methods that affects the parent array.
1. push: The push() array method is used to add item (usually at the last) of the parent array.
2. pop: The pop() array method is used to remove item (usually at the last) of the parent array.
3. shift: The shift() array method is used to remove item (usually at the first) of the parent array.
4. unshift: The unshift() array method is used to add item (usually at the first) of the parent array.
5. splice: This is used to change or replace an item or more in a particular position of an array starting from the index array to the number of item you want to mutate.
const myStudent = ["Esther", "Nonso", "Godwin", "Clement"];
myStudent.splice(1, 1, "Favour");
console.log(myStudent); The first parameter is for the index, the second parameter is the number of item you want to remove or mutate, The third parameter is for the item you want to add at that index.
6. sort: This is used to arrange numbers and strings in their ascending order. This doesn't work exactly well for  numbers when 
7. reverse*/

const myStudent = ["Esther", "Nonso", "Godwin", "Clement"];
const numberExample = [23, 1, 6, 2, 90, 65];
numberExample.sort((a,b)=> a-b);
console.log(numberExample);