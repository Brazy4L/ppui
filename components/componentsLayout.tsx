import Sidebar from './sidebar'

export default function ComponentsLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
