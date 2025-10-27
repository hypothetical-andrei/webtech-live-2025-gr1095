// o funcție care primește ca parametrii două array-uri de aceeași lungime și returnează un array cu elementele din cele două surse intercalate
// daca cele doua array-uri nu au aceeasi lungime, functia returneaza null
const intercaleaza = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return null
  }
  const result = []
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i])
    result.push(arr2[i])
  }
  return result
}

console.log(intercaleaza([1, 2, 3], [4, 5])) // [1, 4, 2, 5, 3, 6]
console.log(intercaleaza([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6]
console.log(intercaleaza(['a', 'b', 'c'], ['x', 'y', 'z'])) // ['a', 'x', 'b', 'y', 'c', 'z']