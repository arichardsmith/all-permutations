export default function all(strings: TemplateStringsArray, ...vars: any[]) {
  // Wrap no array vars in an array
  const arrayVariables = vars.map(item => (Array.isArray(item) ? item : [item]))

  let allVariations: string[] = [strings[0]]

  const vl = arrayVariables.length
  for (let i = 0; i < vl; i++) {
    const nextArr = arrayVariables[i]
    allVariations = allVariations.reduce(
      (allVariations: string[], nextVariation) => [
        ...allVariations,
        ...nextArr.map(item => nextVariation + item + strings[i + 1])
      ],
      []
    )
  }

  return allVariations
}
