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
            <Image src="/favicon.svg" alt="Home" width="32" height="32" />
            <div
              className={
                router.pathname === '/'
                  ? 'text-light-primary dark:text-dark-primary'
                  : ''
              }
            >
              PPUI
            </div>
          </Link>
          <Link
            className={
              router.pathname.startsWith('/components')
                ? 'text-light-primary dark:text-dark-primary'
                : ''
            }
            href="/components"
          >
            Components
          </Link>
        <button
          onClick={() => {
            setTheme(!theme);
            localStorage.setItem('theme', JSON.stringify(!theme));
            const css = document.createElement('style');
            css.type = 'text/css';
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
            );
            document.head.appendChild(css);
            document.documentElement.className = theme ? '' : 'dark';
            const _ = window.getComputedStyle(css).opacity;
            document.head.removeChild(css);
            // @ts-expect-error
            document.querySelector('meta[name="color-scheme"]').content = theme
              ? 'light'
              : 'dark';
          }}
        >
          {theme ? (
            <svg
              className="h-[28px] fill-gray-400 stroke-gray-400"
              width="24"
              height="24"
            >
              <path d="M18 12c0 5.523-4.477 10-10 10s2-4.477 2-10S2.477 2 8 2s10 4.477 10 10Z" />
            </svg>
          ) : (
            <svg
              className="h-[28px] fill-gray-300 stroke-gray-700"
              width="24"
              height="24"
            >
              <circle cx="12" cy="12" r="4" strokeWidth="4" />
              <path
                strokeWidth="2"
                d="M12 5V2M12 22v-3M17.293 6.455l2.828-2.828M16.707 17.293l2.828 2.828M3.707 3.293l2.829 2.828M3.293 20.455l2.828-2.828M19 12h2M3 12h2"
              />
            </svg>
          )}
        </button>
        </nav>
      </header>
      <hr className='border-light-bg-secondary dark:border-dark-bg-secondary'/>
    </>
  )
}
