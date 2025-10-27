// funcție care calculează elementul de un anumit ordin al șirului lui Fibonacci, primind acest ordin ca parametru de linie de comandă.
const fibonacci = (n) => {
  if (n <= 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

const input = process.argv[2]
const n = parseInt(input, 10)

if (isNaN(n)) {
  console.log('Te rog să introduci un număr valid ca parametru de linie de comandă.')
} else {
  const result = fibonacci(n)
  console.log(`Elementul de ordin ${n} al șirului lui Fibonacci este: ${result}`)
}