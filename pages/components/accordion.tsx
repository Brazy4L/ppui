import BaseHead from '@/components/baseHead'
import Preview from '@/components/preview'
import { AccordionRegularOne } from '@/components/components/accordion'
import { accordionRegularOne } from '@/data/components/accordion'

interface Code {
  code: {
    react: HTMLElement
    vue: HTMLElement
    svelte: HTMLElement
    solid: HTMLElement
  }
}

export default function Accordion({ code }: Code) {
  return (
    <>
      <BaseHead title="Accordion - Components" />
      <Preview
        name="Regular One"
        Comp={() => <AccordionRegularOne />}
        code={code}
        preCode={accordionRegularOne}
      />
    </>
  )
}

export async function getStaticProps() {
  const shiki = require('shiki')

  const highlighter = await shiki.getHighlighter({
    theme: 'dark-plus',
  })

  const react = highlighter.codeToHtml(accordionRegularOne.react, {
    lang: 'js',
  })

  const vue = highlighter.codeToHtml(accordionRegularOne.vue, {
    lang: 'js',
  })

  const svelte = highlighter.codeToHtml(accordionRegularOne.svelte, {
    lang: 'js',
  })

  const solid = highlighter.codeToHtml(accordionRegularOne.solid, {
    lang: 'js',
  })

  return {
    props: {
      code: {
        react,
        vue,
        svelte,
        solid,
      },
    },
  }
}
