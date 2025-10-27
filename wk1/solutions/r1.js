// o funcție arrow care primește ca parametru un array de string și îmi returnează un singur string obținut prin concatenarea string-urilor din array-ul primit ca parametru.
const concat = (arr) => {
  let result = ''
  for (const item of arr) {
    result += item
  }
  return result
}

console.log(concat(["Ana", "are", "mere"])) 
