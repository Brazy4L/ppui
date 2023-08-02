import { useRouter } from 'next/router'
import Link from 'next/link'

const links = [{ name: 'Accordion', href: '/components/accordion' }]

export default function Sidebar() {
  const router = useRouter()

  return (
    <nav className="flex flex-col gap-1 overflow-y-scroll pr-4 font-semibold">
      <Link
        className={'transition-colors hover:text-light-primary dark:hover:text-dark-primary '.concat(
          router.pathname === '/components'
            ? 'text-light-primary dark:text-dark-primary'
            : ''
        )}
        href="/components"
      >
        Intro
      </Link>
      <hr className="border-light-bg-secondary dark:border-dark-bg-secondary" />
      {links.map((link, index) => (
        <Link
          className={'transition-colors hover:text-light-primary dark:hover:text-dark-primary '.concat(
            router.pathname === link.href
              ? 'text-light-primary dark:text-dark-primary'
              : ''
          )}
          key={index}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
