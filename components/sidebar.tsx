import { useRouter } from 'next/router'
import Link from 'next/link'
import { Icon } from '@iconify-icon/react'
import { Dispatch, MouseEventHandler, SetStateAction } from 'react'

const links = [{ name: 'Accordion', href: '/components/accordion' }]

const frameworks = [
  { name: 'React', icon: 'logos:react', shorthand: 'react' },
  { name: 'Vue', icon: 'logos:vue', shorthand: 'vue' },
  { name: 'Svelte', icon: 'logos:svelte-icon', shorthand: 'svelte' },
  { name: 'Solid', icon: 'logos:solidjs-icon', shorthand: 'solid' },
]

export default function Sidebar({
  options,
  setOptions,
}: {
  options: { framework: string }
  setOptions: Dispatch<SetStateAction<{ framework: string }>>
}) {
  const router = useRouter()

  const optionsHandler = (key: string, value: string) => {
    let newOptions = { ...options, [key]: value }
    setOptions(newOptions)
    localStorage.setItem('options', JSON.stringify(newOptions))
  }

  return (
    <nav className="scrbar top-20 flex flex-col gap-2 overflow-y-auto rounded-lg border-2 border-light-bg-alternative p-4 font-semibold dark:border-dark-bg-alternative lg:sticky lg:h-[calc(100vh-6rem-1px)]">
      <div className="flex flex-col gap-2">
        <Heading heading="Pick your poison" />
        <div className="grid grid-cols-2 gap-2">
          {frameworks.map((framework, index) => (
            <Button
              key={index}
              className={
                framework.shorthand === options.framework
                  ? 'ring-2 ring-light-primary dark:ring-dark-primary'
                  : ''
              }
              icon={framework.icon}
              name={framework.name}
              onClick={() => optionsHandler('framework', framework.shorthand)}
            />
          ))}
        </div>
      </div>
      <Heading heading="Get started" />
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
      <Heading heading="Elements" />
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

function Heading({ heading }: { heading: string }) {
  return (
    <div className="flex items-center">
      <div className="h-px w-full bg-light-bg-alternative dark:bg-dark-bg-alternative"></div>
      <h2 className="min-w-max text-light-text-secondary dark:text-dark-text-secondary">
        {heading}
      </h2>
      <div className="h-px w-full bg-light-bg-alternative dark:bg-dark-bg-alternative"></div>
    </div>
  )
}

function Button({
  className,
  onClick,
  icon,
  name,
}: {
  className: string
  onClick: MouseEventHandler<HTMLButtonElement>
  icon: string
  name: string
}) {
  return (
    <button
      className={'flex gap-2 rounded-lg bg-light-bg-secondary p-4 transition-all dark:bg-dark-bg-secondary '.concat(
        className
      )}
      onClick={onClick}
    >
      <Icon icon={icon} width="24" height="24" />
      <p>{name}</p>
    </button>
  )
}
