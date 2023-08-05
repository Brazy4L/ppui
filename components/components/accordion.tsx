import { Icon } from '@iconify-icon/react'
import { Fragment } from 'react'

const items = [
  {
    heading: 'Item 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit in quis. Amet nostrum, porro mollitia consequatur nemo impedit odit.',
  },
  {
    heading: 'Item 2',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A optio adipisci ipsa deserunt incidunt facere? Porro modi perferendis officia eius repellendus velit odit quae, distinctio, doloremque ipsa deleniti rem quod?',
  },
  {
    heading: 'Item 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officiis facilis libero. Neque explicabo nisi iste eveniet non quidem nulla, voluptas temporibus suscipit culpa nam, laudantium, provident corrupti. Debitis doloribus ipsum dolorum fuga iusto aperiam ad perspiciatis quaerat repellendus magni!',
  },
  {
    heading: 'Item 4',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id rem dolorem quos? Delectus aperiam nihil esse. Quasi reiciendis natus totam aut eaque praesentium quaerat itaque sed, quas accusantium? Earum alias et a accusantium culpa perferendis veniam possimus minima nihil dolorum quidem maiores porro exercitationem nobis reiciendis saepe, dolore ipsa quod.',
  },
]

export function AccordionRegularOne() {
  return (
    <div className="w-full max-w-xl rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary">
      {items.map((item, index) => (
        <Fragment key={index}>
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
        </Fragment>
      ))}
    </div>
  )
}

export function AccordionRegularTwo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <details className="group rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <summary className="flex cursor-pointer p-4">
          <span className="basis-full text-lg font-bold">Item 1</span>
          <Icon
            icon="material-symbols:keyboard-arrow-down-rounded"
            className="text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
            width="28"
            height="28"
          />
        </summary>
        <p className="px-4 pb-4 text-light-text-secondary dark:text-dark-text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          totam!
        </p>
      </details>
      <details className="group rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <summary className="flex cursor-pointer p-4">
          <span className="basis-full text-lg font-bold">Item 2</span>
          <Icon
            icon="material-symbols:keyboard-arrow-down-rounded"
            className="text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
            width="28"
            height="28"
          />
        </summary>
        <p className="px-4 pb-4 text-light-text-secondary dark:text-dark-text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          totam!
        </p>
      </details>
      <details className="group rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <summary className="flex cursor-pointer p-4">
          <span className="basis-full text-lg font-bold">Item 3</span>
          <Icon
            icon="material-symbols:keyboard-arrow-down-rounded"
            className="text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
            width="28"
            height="28"
          />
        </summary>
        <p className="px-4 pb-4 text-light-text-secondary dark:text-dark-text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          totam!
        </p>
      </details>
      <details className="group rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <summary className="flex cursor-pointer p-4">
          <span className="basis-full text-lg font-bold">Item 4</span>
          <Icon
            icon="material-symbols:keyboard-arrow-down-rounded"
            className="text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
            width="28"
            height="28"
          />
        </summary>
        <p className="px-4 pb-4 text-light-text-secondary dark:text-dark-text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          totam!
        </p>
      </details>
    </div>
  )
}
