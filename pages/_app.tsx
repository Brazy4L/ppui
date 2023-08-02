/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import '@/styles/styles.css'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
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
      </Head>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Script id="theme" strategy="beforeInteractive">
        {`
          const meta = document.createElement('meta');
          meta.name = "color-scheme";
          meta.content = "light";
          document.getElementsByTagName('head')[0].appendChild(meta);
          const dark = localStorage.getItem('theme');
          if ((window.matchMedia('(prefers-color-scheme: dark)').matches && !dark) || (dark === 'true')) {
            document.documentElement.className = 'dark';
            document.querySelector('meta[name="color-scheme"]').content = 'dark';
          }
        `}
      </Script>
      <Script id="favicon" strategy="lazyOnload">
        {`
        const favicon = document.querySelector('link[rel="icon"]')
        document.addEventListener("visibilitychange", () => {
          const hidden = document.hidden
          favicon.setAttribute("href", \`/favicon\${hidden ? "-hidden" : ""}.svg\`)
        })
        `}
      </Script>
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
