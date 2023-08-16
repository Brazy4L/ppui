import Head from 'next/head'

export default function BaseHead({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <Head>
      <title>{`${title} | PPUI`}</title>
      <meta name="description" content={description} />
    </Head>
  )
}
