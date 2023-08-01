import Sidebar from './sidebar'

export default function ComponentsLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
