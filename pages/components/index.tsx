import Layout from '@/components/layout'
import ComponentsLayout from '@/components/componentsLayout'
import type { ReactElement } from 'react'

export default function Components() {
  return (
    <>
      <h1>Intro</h1>
    </>
  )
}

Components.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ComponentsLayout>{page}</ComponentsLayout>
    </Layout>
  )
}
