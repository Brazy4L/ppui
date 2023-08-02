import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
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
              <svg
                className="fill-dark-text-secondary"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z" />
              </svg>
            ) : (
              <svg
                className="fill-light-text-secondary"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
              </svg>
            )}
          </button>
        </nav>
      </header>
      <hr className="border-light-bg-secondary dark:border-dark-bg-secondary" />
    </>
  )
}
