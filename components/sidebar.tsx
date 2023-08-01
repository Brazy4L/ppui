import Link from 'next/link'

export default function Sidebar() {
  return (
    <nav>
      <Link href="/components">Intro</Link>
      <Link href="/components/accordion">Accordion</Link>
    </nav>
  )
}
