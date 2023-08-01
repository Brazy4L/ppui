import Head from 'next/head'
import Layout from '@/components/layout'
import type { ReactElement } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>PPUI - UI Components</title>
      </Head>
      <h1>PPUI</h1>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
