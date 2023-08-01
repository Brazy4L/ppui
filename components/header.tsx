import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image src="/favicon.svg" alt="Home" width="32" height="32" />
        </Link>
        <Link href="/components">Components</Link>
      </nav>
    </header>
  )
}
