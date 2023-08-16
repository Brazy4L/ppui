import { Highlighter } from 'shiki'
import { readFileSync } from 'fs'

interface Obj {
  [x: string]: Item[]
  react: Item[]
  vue: Item[]
  svelte: Item[]
  solid: Item[]
}

interface Item {
  tab: string
  path: string
  code?: string
  highlightedCode?: string
}

export const loopAndHighlight = (obj: Obj, highlighter: Highlighter) => {
  for (const key in obj) {
    obj[key].forEach((item) => {
      item.code = readFileSync(item.path, 'utf8')
      item.highlightedCode = highlighter.codeToHtml(
        item.code,
        key === 'vue'
          ? { lang: 'vue' }
          : key === 'svelte'
          ? { lang: 'svelte' }
          : { lang: 'jsx' }
      )
    })
  }

  return obj
}
