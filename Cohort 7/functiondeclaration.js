/* There are two ways of calling a function
1. Function declaration
2. Function expression.*/
//Function by declaration
function addnum(name){
console.log(name);
}
addnum("David");

//Function by expression(It is also called an arrow function)
const subnum  = (name)=> {
console.log(name);
};
subnum("Augustine");