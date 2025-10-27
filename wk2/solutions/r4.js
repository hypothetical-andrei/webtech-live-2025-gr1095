// (re)implementați metoda reduce(reduceleft) ca o funcție globală.

const reduceLeft = (arr, update, initialValue) => {
  let accumulator = initialValue

  for (let elem of arr) {
    accumulator = update(accumulator, elem)
  }

  return accumulator
}


console.log(reduceLeft([1, 2, 3, 4], (a, e) => a + e, 0)) // 10