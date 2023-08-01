import Head from 'next/head'

export default function BaseHead({ title }: { title: string }) {
  return (
    <Head>
      <title>{`${title} | PPUI`}</title>
    </Head>
  )
}
