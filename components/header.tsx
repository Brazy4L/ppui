import { useRouter } from 'next/router'
import Link from 'next/link'
import { Icon } from '@iconify-icon/react'
import { Dispatch, SetStateAction } from 'react'

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
      <header className="mx-auto max-w-7xl p-4">
        <nav className="flex items-center gap-4 font-semibold">
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
            className="h-[32px] w-[32px] rounded-full p-1 ring-1 ring-light-bg-secondary dark:ring-dark-bg-secondary"
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
          >
            {theme ? (
              <Icon
                icon="material-symbols:light-mode-outline"
                className="text-dark-text-secondary"
                width="24"
                height="24"
              />
            ) : (
              <Icon
                icon="material-symbols:dark-mode-outline-rounded"
                className="text-light-text-secondary"
                width="24"
                height="24"
              />
            )}
          </button>
        </nav>
      </header>
      <hr className="border-light-bg-secondary dark:border-dark-bg-secondary" />
    </>
  )
}
