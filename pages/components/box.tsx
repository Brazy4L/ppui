import useViewportWidth from '@/utils/useViewportWidth'
import { getHighlighter } from 'shiki'
import { loopAndHighlight } from '@/utils/utils'
import BaseHead from '@/components/baseHead'
import Preview from '@/components/preview'
import BoxRegular from '@/components/components/box/BoxRegular'
import { boxRegular } from '@/data/components/box'

export default function Box(props: any) {
  const viewportWidth = useViewportWidth()

  return (
    <>
      <BaseHead
        title="Truncated Box - Components"
        description="Truncated Box - PPUI component"
      />
      <h1 className="mt-4 text-center text-xl font-semibold lg:mt-0">
        Truncated Box
      </h1>
      <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
      <Preview
        name="Regular"
        Comp={() => <BoxRegular />}
        code={props.boxRegular}
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
      boxRegular: loopAndHighlight(boxRegular, highlighter),
    },
  }
}
