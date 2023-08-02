import Header from './header'
import { useState, useEffect } from 'react'

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    const dark = localStorage.getItem('theme')
    if (
      (window.matchMedia('(prefers-color-scheme: dark)').matches && !dark) ||
      dark === 'true'
    ) {
      setTheme(true)
    }
  }, [])

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      {children}
    </>
  )
}
