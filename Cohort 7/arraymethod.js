/*Mutating array methods
.push()
.pop()
.shift()
.unshift()
.slice()
.sort()
.reverse()

indexof.() is a used to locate the position/index of an item on an array. (this is not a mutating array method*/
const myStudents = ["Ester", "Nonso", "Godwin", "Clement"];
myStudents.sort((a,b) => b.localeCompare(a));//This is used to arrange strings in descending order
console.log(myStudents)
const numberExample = [23, 1, 6, 2, 90, 65];
numberExample.sort();// this is will not console log in ASCII order
console.log(numberExample);
numberExample.sort((a,b) => a - b);// this will console log in ASCII order in ascending order
console.log(numberExample);
numberExample.sort((a, b) => b - a);// this will console log in ASCII order in descending order
console.log(numberExample);// callback function is used to call a particular value. it requires two parameters