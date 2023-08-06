import { getHighlighter } from 'shiki'
import { loopAndHighlight } from '@/utils/utils'
import BaseHead from '@/components/baseHead'
import Preview from '@/components/preview'
import { AccordionRegularOne } from '@/components/components/accordion'
import { accordionRegularOne } from '@/data/components/accordion'
import { AccordionRegularTwo } from '@/components/components/accordion'
import { accordionRegularTwo } from '@/data/components/accordion'

export default function Accordion(props: any) {
  return (
    <>
      <BaseHead title="Accordion - Components" />
      <Preview
        name="Regular One"
        Comp={() => <AccordionRegularOne />}
        code={props.accordionRegularOne}
        preCode={accordionRegularOne}
      />
      <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
      <Preview
        name="Regular Two"
        Comp={() => <AccordionRegularTwo />}
        code={props.accordionRegularTwo}
        preCode={accordionRegularTwo}
      />
    </>
  )
}

export async function getStaticProps() {
  const highlighter = await getHighlighter({
    theme: 'dark-plus',
  })

  return {
    props: {
      accordionRegularOne: loopAndHighlight(accordionRegularOne, highlighter),
      accordionRegularTwo: loopAndHighlight(accordionRegularTwo, highlighter),
    },
  }
}
