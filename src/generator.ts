/**
 * Tagged template literal to generate all permutations of a string
 */
export default function* all(strings: TemplateStringsArray, ...vars: any[]) {
  // Wrap none array vars in an array
  const arrayVariables = vars.map(item => (Array.isArray(item) ? item : [item]))

  const totalVariations = productOfLengths(arrayVariables)
  for (let i = 0; i < totalVariations; i++) {
    const currentVars = indexedAccess(arrayVariables, i)
    yield zip(strings, currentVars)
  }
}

function productOfLengths(arrs: any[][]) {
  return arrs.reduce((acc: number, next: any[]) => acc * next.length, 1)
}

function zip(strings: TemplateStringsArray, vars: any[]) {
  return strings.reduce(
    (acc: string, next: string, i: number) =>
      acc + next + String(vars[i] || ''),
    ''
  )
}

function indexedAccess(vars: any[], i: number) {
  return vars.map(item => item[i % item.length])
}
