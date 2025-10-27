// o funcție care primește ca parametru o listă de numere și returnează un array conținând acele numere.

const getNumbers = function () {
  const numbers = []
  for (let i = 0; i < arguments.length; i++) {
    numbers.push(arguments[i])
  }
  return numbers
}

console.log(getNumbers(1, 2, 3, 4, 5)) // [1, 2, 3, 4, 5]
console.log(getNumbers(10, 20)) // [10, 20]