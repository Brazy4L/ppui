import useViewportWidth from '@/utils/useViewportWidth'
import { getHighlighter } from 'shiki'
import { loopAndHighlight } from '@/utils/utils'
import BaseHead from '@/components/baseHead'
import Preview from '@/components/preview'
import ShareRegular from '@/components/components/share/ShareRegular'
import { shareRegular } from '@/data/components/share'

export default function Share(props: any) {
  const viewportWidth = useViewportWidth()

  return (
    <>
      <BaseHead
        title="Share - Components"
        description="Share - PPUI component"
      />
      <h1 className="mt-4 text-center text-xl font-semibold lg:mt-0">Share</h1>
      <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
      <Preview
        name="Regular"
        Comp={() => <ShareRegular />}
        code={props.shareRegular}
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
      shareRegular: loopAndHighlight(shareRegular, highlighter),
    },
  }
}
