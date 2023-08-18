import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import MaterialSymbolsRefreshRounded from '~icons/material-symbols/refresh-rounded'

export default function Home() {
  const [animate, setAnimate] = useState(false)
  const [rotate, setRotate] = useState(0)

  return (
    <>
      <Head>
        <title>PPUI - UI Components</title>
        <meta
          name="description"
          content="A collection of tailwind-styled UI components for React, Vue, Svelte and Solid"
        />
      </Head>
      <main className="mx-auto flex min-h-[calc(100vh-64px)] max-w-4xl flex-col justify-center gap-4 p-4">
        <div className="flex flex-col items-center">
          <h1 className="group text-[max(10vmin,2.25rem)] font-black text-light-primary dark:text-dark-primary">
            P
            <div
              className={'inline-grid grid-cols-[0fr] transition-[grid-template-columns] duration-200 ease-in-out will-change-transform '.concat(
                animate ? 'grid-cols-[1fr]' : ''
              )}
            >
              <div className="overflow-hidden">iss</div>
            </div>
            P
            <div
              className={'inline-grid grid-cols-[0fr] transition-[grid-template-columns] duration-200 ease-in-out will-change-transform '.concat(
                animate ? 'grid-cols-[1fr]' : ''
              )}
            >
              <div className="overflow-hidden">oor</div>
            </div>
            UI
          </h1>
          <p className="font-semibold">
            A collection of tailwind-styled UI components for every JavaScript
            framework{' '}
            <span className="text-light-text-secondary dark:text-dark-text-secondary">
              (not really)
            </span>
            .
          </p>
        </div>
        <div className="flex justify-center gap-2">
          <Link
            className="rounded-lg bg-light-primary p-3 font-semibold text-light-bg-primary transition-colors hover:bg-light-secondary dark:bg-dark-primary dark:text-dark-bg-primary dark:hover:bg-dark-secondary"
            href="/components"
          >
            Get Started
          </Link>
          <button
            className="flex rounded-lg bg-light-bg-secondary p-3 transition-colors hover:bg-light-bg-alternative dark:bg-dark-bg-secondary dark:hover:bg-dark-bg-alternative"
            onClick={() => {
              setAnimate(!animate)
              setRotate(rotate + 1)
            }}
            aria-label="Repeat animation"
          >
            <MaterialSymbolsRefreshRounded
              className="text-light-text-secondary transition-transform duration-200 ease-in-out dark:text-dark-text-secondary"
              style={{ transform: `rotate(${rotate}turn)` }}
              width="24"
              height="24"
            />
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-lg bg-light-bg-secondary p-4 dark:bg-dark-bg-secondary">
            <h2 className="font-semibold">Easy</h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              Plug and play or more like copy and paste
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-light-bg-secondary p-4 dark:bg-dark-bg-secondary">
            <h2 className="font-semibold">Extensible</h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              Full control over components
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-light-bg-secondary p-4 dark:bg-dark-bg-secondary">
            <h2 className="font-semibold">Simple</h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              No unnecessary dependencies
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
