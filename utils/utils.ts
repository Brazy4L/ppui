import { Highlighter } from 'shiki'

interface Obj {
  [x: string]: Item[]
  react: Item[]
  vue: Item[]
  svelte: Item[]
  solid: Item[]
}

interface Item {
  tab: string
  code: string
  highlightedCode?: string
}

export const loopAndHighlight = (object: Obj, highlighter: Highlighter) => {
  const obj = object

  for (const key in obj) {
    if (key === 'vue') {
      obj[key].forEach((item) => {
        item.highlightedCode = highlighter.codeToHtml(item.code, {
          lang: 'vue',
        })
      })
    } else if (key === 'svelte') {
      obj[key].forEach((item) => {
        item.highlightedCode = highlighter.codeToHtml(item.code, {
          lang: 'svelte',
        })
      })
    } else {
      obj[key].forEach((item: Item) => {
        item.highlightedCode = highlighter.codeToHtml(item.code, {
          lang: 'jsx',
        })
      })
    }
  }

  return obj
}
