//  funcție care primește un array de obiecte și un string și returnează array-ul sortat după cheia specificată prin string.
const sampleArray = [
  { name: 'Ion', age: 30 },
  { name: 'Ana', age: 25 },
  { name: 'Maria', age: 28 }
]

const sortByKey = (arr, key) => {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    return 0
  })
}

console.log(sortByKey(sampleArray, 'name'))
console.log(sortByKey(sampleArray, 'age'))