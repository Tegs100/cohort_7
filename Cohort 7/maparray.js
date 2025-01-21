const studentDetails =[
  {name:"Ayo", age:23, married: false},
  {name:"Favour", age:21, married: false},
  {name:"Clement", age:33, married: true},
];
const studentName = studentDetails.map((student) => student.name);
console.log(studentName);