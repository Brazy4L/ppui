import { createContext, useEffect, useState } from 'react'
import Sidebar from './sidebar'

export const Options = createContext({
  framework: 'react',
  css: 'tw',
})

export default function ComponentsLayout({
  children,
}: React.PropsWithChildren<{}>) {
  const [options, setOptions] = useState({
    framework: 'react',
    css: 'tw',
  })

  useEffect(() => {
    const localOptions = localStorage.getItem('options')!
    if (localOptions) {
      setOptions(JSON.parse(localOptions))
    }
  }, [])

  return (
    <div className="grid grid-cols-[350px,min(80rem,calc(100%-350px))] justify-center gap-4 py-4 pr-4">
      <Sidebar options={options} setOptions={setOptions} />
      <Options.Provider value={options}>
        <main className="w-full max-w-7xl">{children}</main>
      </Options.Provider>
    </div>
  )
}
