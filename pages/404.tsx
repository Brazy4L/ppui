import Link from 'next/link'
import BaseHead from '@/components/baseHead'

export default function Custom404() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-64px)] max-w-xl flex-col justify-center gap-4 p-4">
      <BaseHead title="404" description="Secret 404 Page" />
      <h1 className="text-center font-mono text-xl">
        Secret <span className="font-semibold">404</span> Page
      </h1>
      <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
      <Link
        className="rounded-lg bg-light-primary p-3 text-center font-semibold text-light-bg-primary transition-colors hover:bg-light-secondary dark:bg-dark-primary dark:text-dark-bg-primary dark:hover:bg-dark-secondary"
        href="/"
      >
        Home
      </Link>
    </main>
  )
}
