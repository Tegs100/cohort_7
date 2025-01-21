//Function by declaration
function addnum(surname, firstname){
  const fullname = surname + " " + firstname // string concantenation and adding separation.
  console.log(fullname)
  }
  addnum("Oghenetega", "Godwin");
  
  //Function by expression(It is also called an arrow function)
  const subnum  = (firstfruit, secondfruit)=> {
    const totalfruits = firstfruit + secondfruit // string concatenation
    console.log(totalfruits);
  };
  subnum("Watermelon", "Pineapple");

  /* Differences between function declaration and function expression
  1. Function declaration accepts function hoisting (a process in which a variable can be console.log before the function) but function by expression does not accept function hoisting. See examples in hoist.js*/
 