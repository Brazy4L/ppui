import Sidebar from './sidebar'

export default function ComponentsLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="grid grid-cols-[200px,min(80rem,calc(100%-200px))] justify-center gap-4 p-4">
      <Sidebar />
      <main className="w-full max-w-7xl">{children}</main>
    </div>
  )
}
