export const loopAndHighlight = (
  object: { [x: string]: string },
  highlighter: any
) => {
  const obj: { [x: string]: string } = {}

  for (const key in object) {
    if (key === 'vue') {
      obj[key] = highlighter.codeToHtml(object[key], {
        lang: 'vue',
      })
    } else if (key === 'svelte') {
      obj[key] = highlighter.codeToHtml(object[key], {
        lang: 'svelte',
      })
    } else {
      obj[key] = highlighter.codeToHtml(object[key], {
        lang: 'jsx',
      })
    }
  }
  return obj
}
