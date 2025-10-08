function f (first, second) {
  if (second.length !== first.length) {
    throw new Error('length error')
  } 
  const results = []
  for (let i = 0; i < first.length; i++) {
    results.push(first[i], second[i``])
  }
  return results
}