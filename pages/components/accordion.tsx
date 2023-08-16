import useViewportWidth from '@/utils/useViewportWidth'
import { getHighlighter } from 'shiki'
import { loopAndHighlight } from '@/utils/utils'
import BaseHead from '@/components/baseHead'
import Preview from '@/components/preview'
import AccordionRegularOne from '@/components/components/accordion/AccordionRegularOne'
import AccordionRegularTwo from '@/components/components/accordion/AccordionRegularTwo'
import AccordionAnimated from '@/components/components/accordion/AccordionAnimated'
import AccordionAnimatedRadio from '@/components/components/accordion/AccordionAnimatedRadio'
import {
  accordionRegularOne,
  accordionRegularTwo,
  accordionAnimated,
  accordionAnimatedRadio,
} from '@/data/components/accordion'

export default function Accordion(props: any) {
  const viewportWidth = useViewportWidth()

  return (
    <>
      <BaseHead
        title="Accordion - Components"
        description="Accordion - PPUI component"
      />
      <Preview
        name="Regular One"
        Comp={() => <AccordionRegularOne />}
        code={props.accordionRegularOne}
        viewportWidth={viewportWidth}
        element={true}
      />
      <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
      <Preview
        name="Regular Two"
        Comp={() => <AccordionRegularTwo />}
        code={props.accordionRegularTwo}
        viewportWidth={viewportWidth}
        element={true}
      />
      <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
      <Preview
        name="Animated"
        Comp={() => <AccordionAnimated />}
        code={props.accordionAnimated}
        viewportWidth={viewportWidth}
        element={true}
      />
      <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
      <Preview
        name="Animated Radio-like"
        Comp={() => <AccordionAnimatedRadio />}
        code={props.accordionAnimatedRadio}
        viewportWidth={viewportWidth}
        element={true}
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
      accordionAnimated: loopAndHighlight(accordionAnimated, highlighter),
      accordionAnimatedRadio: loopAndHighlight(
        accordionAnimatedRadio,
        highlighter
      ),
    },
  }
}
