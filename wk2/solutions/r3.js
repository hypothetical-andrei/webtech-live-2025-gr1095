// funcție de formatare a unui string care suportă parametrii numiți; de exemplu "un {substantiv} este {adjectiv}" să poată fi formatat în "un căluț este drăguț".
const formatString = (template, params) => {
  let formatted = template
  for (const key in params) {
    const placeholder = `{${key}}`
    formatted = formatted.replace(placeholder, params[key])
  }
  return formatted
}

console.log(formatString("un {substantiv} este {adjectiv}", { substantiv: "căluț", adjectiv: "drăguț" })) // "un căluț este drăguț"
console.log(formatString("Astăzi este {zi} și vremea este {stare}", { zi: "luni", stare: "frumoasă" })) // "Astăzi este luni și vremea este frumoasă"