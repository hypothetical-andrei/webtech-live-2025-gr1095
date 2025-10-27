// uncție care primește ca parametrii un array de numere și un număr și returnează suma tuturor numerelor din array divizibile cu cel de-al doilea parametru.
const sumDivisible = (arr, divisor) => {
  return arr.filter(num => num % divisor === 0)
            .reduce((sum, num) => sum + num, 0)
}

console.log(sumDivisible([1, 2, 3, 4, 5, 6], 2)) // 12 (2 + 4 + 6)
console.log(sumDivisible([10, 15, 20, 25], 5)) // 70 (10 + 15 + 20 + 25)