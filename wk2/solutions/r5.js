// implementați cenzurarea unui text printr-o funcție. Funcția primește un șir de caractere și un dicționar sub forma unui array. De exemplu pentru șirul "javascript este minunat" și dicționarul ["este"] funcția va produce "javascript e**e minunat".
const censorText = (text, dictionary) => {
  let censoredText = text
  for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i]
    const censor = '*'.repeat(word.length - 2)
    const censoredWord = word[0] + censor + word[word.length - 1]
    censoredText = censoredText.replace(word, censoredWord)
  }
  return censoredText
}

console.log(censorText("javascript este minunat", ["este"])) // "javascript e**e minunat"
console.log(censorText("Acesta este un test simplu", ["Acesta", "simplu"])) // "****** e**e un test ******"