// folosiți metodele map și filter pentru a procesa un array de numere reprezentând ani de naștere obținând vârstele peste 18 ani.
const birthYears = [1990, 2005, 1985, 2010, 2000]

// const currentYear = new Date().getFullYear()
const currentYear = 2025

const agesOver18 = birthYears
  .map(year => currentYear - year) // calculăm vârstele
  .filter(age => age > 18) // filtrăm vârstele peste 18 ani

console.log(agesOver18) // afișăm rezultatul  