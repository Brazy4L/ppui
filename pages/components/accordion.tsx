import Layout from '@/components/layout'
import ComponentsLayout from '@/components/componentsLayout'
import type { ReactElement } from 'react'

export default function Accordion() {
  return (
    <>
      <h1>Accordion</h1>
    </>
  )
}

Accordion.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ComponentsLayout>{page}</ComponentsLayout>
    </Layout>
  )
}
