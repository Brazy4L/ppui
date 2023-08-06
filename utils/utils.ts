export const loopAndHighlight = (
  object: { [x: string]: string },
  highlighter: any
) => {
  const obj: { [x: string]: string } = {}

  for (const key in object) {
    obj[key] = highlighter.codeToHtml(object[key], {
      lang: 'js',
    })
  }
  return obj
}
