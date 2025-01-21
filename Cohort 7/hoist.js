const totalname = addNum("Tega","Tasha")
console.log(totalname)

function addNum(firstname, surname) {
  const total = firstname.concat(surname);// .concat does not work on numbers but strings only when hoisting, use + symbol instead.
  return total
}
