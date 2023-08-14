import { useRouter } from 'next/router'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import MaterialSymbolsLightModeOutline from '~icons/material-symbols/light-mode-outline'
import MaterialSymbolsDarkModeOutlineRounded from '~icons/material-symbols/dark-mode-outline-rounded'

export default function Header({
  theme,
  setTheme,
}: {
  theme: boolean
  setTheme: Dispatch<SetStateAction<boolean>>
}) {
  const router = useRouter()

  return (
    <>
      <header className="top-0 z-10 mx-auto grid h-16 border-b border-light-bg-alternative bg-light-bg-primary p-4 dark:border-dark-bg-alternative dark:bg-dark-bg-primary lg:sticky">
        <nav className="mx-auto flex w-full max-w-7xl items-center gap-4 justify-self-stretch font-semibold">
          <Link className="flex min-w-fit items-center gap-4" href="/">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <path
                className="fill-light-text-primary dark:fill-dark-text-primary"
                d="M0 16h14v9a7 7 0 1 1-14 0v-9ZM21 16h6v16h-6z"
              />
              <path
                className="fill-light-primary dark:fill-dark-primary"
                d="M32 8c0 4.418-3.582 7-8 7s-8-2.582-8-7a8 8 0 1 1 16 0Z"
              />
            </svg>
            <div
              className={'transition-colors hover:text-light-primary dark:hover:text-dark-primary '.concat(
                router.pathname === '/'
                  ? 'text-light-primary dark:text-dark-primary'
                  : ''
              )}
            >
              PPUI
            </div>
          </Link>
          <Link
            className={'ml-auto transition-colors hover:text-light-primary dark:hover:text-dark-primary '.concat(
              router.pathname.startsWith('/components')
                ? 'text-light-primary dark:text-dark-primary'
                : ''
            )}
            href="/components"
          >
            Components
          </Link>
          <button
            className="flex rounded-full p-1 ring-1 ring-light-bg-alternative dark:ring-dark-bg-alternative"
            onClick={() => {
              setTheme(!theme)
              localStorage.setItem('theme', JSON.stringify(!theme))
              const css = document.createElement('style')
              css.type = 'text/css'
              css.appendChild(
                document.createTextNode(
                  `* {
                      -webkit-transition: none !important;
                      -moz-transition: none !important;
                      -o-transition: none !important;
                      -ms-transition: none !important;
                      transition: none !important;
                    }
                `
                )
              )
              document.head.appendChild(css)
              document.documentElement.className = theme ? '' : 'dark'
              const _ = window.getComputedStyle(css).opacity
              document.head.removeChild(css)
              // @ts-expect-error
              document.querySelector('meta[name="color-scheme"]').content =
                theme ? 'light' : 'dark'
            }}
            title="Change theme"
          >
            {theme ? (
              <MaterialSymbolsLightModeOutline
                className="text-dark-text-secondary"
                width="24"
                height="24"
              />
            ) : (
              <MaterialSymbolsDarkModeOutlineRounded
                className="text-light-text-secondary"
                width="24"
                height="24"
              />
            )}
          </button>
        </nav>
      </header>
    </>
  )
}
