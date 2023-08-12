import { useState, useEffect } from 'react'
import { getHighlighter } from 'shiki'
import { loopAndHighlight } from '@/utils/utils'
import BaseHead from '@/components/baseHead'
import Preview from '@/components/preview'
import { AccordionRegularOne } from '@/components/components/accordion'
import { accordionRegularOne } from '@/data/components/accordion'
import { AccordionRegularTwo } from '@/components/components/accordion'
import { accordionRegularTwo } from '@/data/components/accordion'
import { AccordionAnimated } from '@/components/components/accordion'
import { accordionAnimated } from '@/data/components/accordion'
import { AccordionAnimatedRadio } from '@/components/components/accordion'
import { accordionAnimatedRadio } from '@/data/components/accordion'

export default function Accordion(props: any) {
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    setViewportWidth(window.innerWidth)
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth
      setViewportWidth(newWidth)
    }
    window.addEventListener('resize', updateWindowDimensions)
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  return (
    <>
      <BaseHead title="Accordion - Components" />
      <Preview
        name="Regular one"
        Comp={() => <AccordionRegularOne />}
        code={props.accordionRegularOne}
        preCode={accordionRegularOne}
        viewportWidth={viewportWidth}
        element={true}
      />
      <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
      <Preview
        name="Regular two"
        Comp={() => <AccordionRegularTwo />}
        code={props.accordionRegularTwo}
        preCode={accordionRegularTwo}
        viewportWidth={viewportWidth}
        element={true}
      />
      <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
      <Preview
        name="Animated"
        Comp={() => <AccordionAnimated />}
        code={props.accordionAnimated}
        preCode={accordionAnimated}
        viewportWidth={viewportWidth}
        element={true}
      />
      <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
      <Preview
        name="Animated radio-like"
        Comp={() => <AccordionAnimatedRadio />}
        code={props.accordionAnimatedRadio}
        preCode={accordionAnimatedRadio}
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
