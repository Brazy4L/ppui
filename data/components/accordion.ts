export const react = 
`import { Icon } from '@iconify-icon/react'

const items = [
  {
    heading: 'Item 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, totam!',
  },
  {
    heading: 'Item 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, totam!',
  },
  {
    heading: 'Item 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, totam!',
  },
  {
    heading: 'Item 4',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, totam!',
  },
]

export function Accordion() {
  return (
    <div className="w-full rounded-2xl bg-light-bg-secondary dark:bg-dark-bg-secondary">
      {items.map((item, index) => (
        <>
          <details className="group">
            <summary className="flex cursor-pointer p-4">
              <h3 className="basis-full text-lg font-bold">{item.heading}</h3>
              <Icon
                icon="material-symbols:keyboard-arrow-down-rounded"
                className="text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
                width="28"
                height="28"
              />
            </summary>
            <p className="px-4 pb-4 text-light-text-secondary dark:text-dark-text-secondary">
              {item.content}
            </p>
          </details>
          {index < items.length - 1 && (
            <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
          )}
        </>
      ))}
    </div>
  )
}
`
