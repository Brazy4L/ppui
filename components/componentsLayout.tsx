import { createContext, useEffect, useState } from 'react'
import Sidebar from './sidebar'

export const Options = createContext({
  framework: 'react',
})

export default function ComponentsLayout({
  children,
}: React.PropsWithChildren<{}>) {
  const [options, setOptions] = useState({
    framework: 'react',
  })

  useEffect(() => {
    const localOptions = localStorage.getItem('options')!
    if (localOptions) {
      setOptions(JSON.parse(localOptions))
    }
  }, [])

  return (
    <div className="justify-center gap-4 p-4 lg:grid lg:grid-cols-[350px,min(80rem,calc(100%-350px-1rem))]">
      <Sidebar options={options} setOptions={setOptions} />
      <Options.Provider value={options}>
        <main className="flex w-full max-w-7xl flex-col gap-4">{children}</main>
      </Options.Provider>
    </div>
  )
}
