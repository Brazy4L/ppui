import '@/styles/styles.css'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '@/components/layout'
import ComponentsLayout from '@/components/componentsLayout'
import type { AppProps } from 'next/app'


const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        {/* <meta name="color-scheme" content="dark" /> */}
      </Head>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      {router.pathname.startsWith('/components') ? (
        <Layout>
          <ComponentsLayout>
            <Component {...pageProps} />
          </ComponentsLayout>
        </Layout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  )
}
