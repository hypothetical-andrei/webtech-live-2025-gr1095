function makeArray(...args) {
  // return args
  // const results = []
  // for (let elem of args) {
  //   results.push(elem)
  // }
  // return results
  const results = []
  for (let i = 0; i < args.length; i++) {
    results.push(results[i])
  }
  return results
}


makeArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)