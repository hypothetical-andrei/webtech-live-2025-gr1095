// funcție care calculează frecvențele relative de apariție a unor litere într-un text, excluzând caracterul pentru spațiu.

const calculateFrequencies = (text) => {
  const frequencies = {}
  const totalChars = text.length

  for (const char of text) {
    if (char === ' ') {
      continue
    }
    if (frequencies[char]) {
      frequencies[char] += 1
    } else {
      frequencies[char] = 1
    }
  }

  for (const char in frequencies) {
    frequencies[char] = frequencies[char] / totalChars
  }

  return frequencies
}

const inputText = 'exemplu de text pentru calcularea frecventelor'
const result = calculateFrequencies(inputText)
console.log(result)