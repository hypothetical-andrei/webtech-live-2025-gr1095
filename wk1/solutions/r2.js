//  o funcție care returnează numărul de caractere diferite între două string-uri de aceeași lungime primite ca parametri. Dacă string-urile primite nu sunt de aceeași lungime, funcția va returna -1.
const countDifferences = (str1, str2) => {
  if (str1.length !== str2.length) {
    return -1
  }
  let count = 0
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++
    }
  }
  return count
}

console.log(countDifferences("abc", "abd")) // 1
console.log(countDifferences("abc", "abc")) // 0
console.log(countDifferences("abc", "ab")) // -1
