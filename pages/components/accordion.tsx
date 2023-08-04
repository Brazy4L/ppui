import { useContext } from 'react'
import { Options } from '@/components/componentsLayout'
import BaseHead from '@/components/baseHead'
import Preview from '@/components/preview'

export default function Accordion() {
  const contextOptions = useContext(Options)

  return (
    <>
      <BaseHead title="Accordion - Components" />
      {/* <div>{contextOptions.framework}</div> */}
      <Preview />

    </>
  )
}
