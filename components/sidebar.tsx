import { useRouter } from 'next/router'
import Link from 'next/link'
import { Dispatch, ElementType, MouseEventHandler, SetStateAction } from 'react'
import LogosReact from '~icons/logos/react'
import LogosVue from '~icons/logos/vue'
import LogosSvelteIcon from '~icons/logos/svelte-icon'
import LogosSolidjsIcon from '~icons/logos/solidjs-icon'
import MaterialSymbolsDns from '~icons/material-symbols/dns'
import MaterialSymbolsShare from '~icons/material-symbols/share'
import MaterialSymbolsPlayArrowRounded from '~icons/material-symbols/play-arrow-rounded'

const links = [
  {
    name: 'Accordion',
    href: '/components/accordion',
    icon: (
      <MaterialSymbolsDns
        className="text-light-text-secondary dark:text-dark-text-secondary"
        width="16"
        height="16"
      />
    ),
  },
  {
    name: 'Share',
    href: '/components/share',
    icon: (
      <MaterialSymbolsShare
        className="text-light-text-secondary dark:text-dark-text-secondary"
        width="16"
        height="16"
      />
    ),
  },
]

const frameworks = [
  {
    name: 'React',
    icon: <LogosReact width="24" height="24" />,
    shorthand: 'react',
  },
  { name: 'Vue', icon: <LogosVue width="24" height="24" />, shorthand: 'vue' },
  {
    name: 'Svelte',
    icon: <LogosSvelteIcon width="24" height="24" />,
    shorthand: 'svelte',
  },
  {
    name: 'Solid',
    icon: <LogosSolidjsIcon width="24" height="24" />,
    shorthand: 'solid',
  },
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
    <nav className="scrbar top-20 flex flex-col gap-4 overflow-y-auto rounded-lg border-2 border-light-bg-alternative p-4 font-semibold dark:border-dark-bg-alternative lg:sticky lg:h-[calc(100vh-6rem-1px)]">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2">
          {frameworks.map((framework, index) => (
            <Button
              key={index}
              className={
                framework.shorthand === options.framework
                  ? 'text-light-primary ring-2 ring-light-primary dark:text-dark-primary dark:ring-dark-primary'
                  : ''
              }
              Icon={() => framework.icon}
              name={framework.name}
              onClick={() => optionsHandler('framework', framework.shorthand)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Heading heading="Get started" />
        <Link
          className={'flex items-center gap-2 transition-colors hover:text-light-primary dark:hover:text-dark-primary '.concat(
            router.pathname === '/components'
              ? 'text-light-primary dark:text-dark-primary'
              : ''
          )}
          href="/components"
        >
          <MaterialSymbolsPlayArrowRounded
            className="text-light-text-secondary dark:text-dark-text-secondary"
            width="16"
            height="16"
          />
          Intro
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Heading heading="Elements" />
        {links.map((link, index) => (
          <Link
            className={'flex items-center gap-2 transition-colors hover:text-light-primary dark:hover:text-dark-primary '.concat(
              router.pathname === link.href
                ? 'text-light-primary dark:text-dark-primary'
                : ''
            )}
            key={index}
            href={link.href}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

function Heading({ heading }: { heading: string }) {
  return (
    <div className="flex items-center">
      <h2 className="min-w-max font-mono text-light-text-secondary dark:text-dark-text-secondary">
        {heading}
      </h2>
      <div className="h-px w-full bg-light-bg-alternative dark:bg-dark-bg-alternative"></div>
    </div>
  )
}

function Button({
  className,
  onClick,
  Icon,
  name,
}: {
  className: string
  onClick: MouseEventHandler<HTMLButtonElement>
  Icon: ElementType
  name: string
}) {
  return (
    <button
      className={'flex gap-2 rounded-lg bg-light-bg-secondary p-4 transition-colors hover:text-light-primary dark:bg-dark-bg-secondary dark:hover:text-dark-primary '.concat(
        className
      )}
      onClick={onClick}
    >
      <Icon />
      <p>{name}</p>
    </button>
  )
}
