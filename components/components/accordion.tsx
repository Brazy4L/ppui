import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import MaterialSymbolsKeyboardArrowDownRounded from '~icons/material-symbols/keyboard-arrow-down-rounded'

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
          {index > 0 && (
            <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
          )}
          <details className="group">
            <summary className="flex cursor-pointer p-4">
              <h3 className="basis-full text-lg font-bold">{item.heading}</h3>
              <MaterialSymbolsKeyboardArrowDownRounded
                className="text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
                width="28"
                height="28"
              />
            </summary>
            <p className="px-4 pb-4 text-light-text-secondary dark:text-dark-text-secondary">
              {item.content}
            </p>
          </details>
        </Fragment>
      ))}
    </div>
  )
}

export function AccordionRegularTwo() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      {items.map((item, index) => (
        <details
          key={index}
          className="group rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary"
        >
          <summary className="flex cursor-pointer p-4">
            <span className="basis-full text-lg font-bold">{item.heading}</span>
            <MaterialSymbolsKeyboardArrowDownRounded
              className="text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
              width="28"
              height="28"
            />
          </summary>
          <p className="px-4 pb-4 text-light-text-secondary dark:text-dark-text-secondary">
            {item.content}
          </p>
        </details>
      ))}
    </div>
  )
}

export function AccordionAnimated() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      {items.map((item, index) => (
        <AccordionAnimatedItem key={index} item={item} />
      ))}
    </div>
  )
}

function AccordionAnimatedItem({
  item,
}: {
  item: { heading: string; content: string }
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="flex cursor-pointer p-4" onClick={() => setOpen(!open)}>
        <h3 className="basis-full text-lg font-bold">{item.heading}</h3>
        <MaterialSymbolsKeyboardArrowDownRounded
          className={`${
            open ? 'rotate-180' : ''
          } text-light-text-secondary transition-transform dark:text-dark-text-secondary`}
          width="28"
          height="28"
        />
      </div>
      <div
        className={`${
          open ? '[grid-template-rows:1fr]' : '[grid-template-rows:0fr]'
        } grid text-light-text-secondary transition-[grid-template-rows] dark:text-dark-text-secondary`}
      >
        <div className="overflow-hidden">
          <p className="mx-4 mb-4">{item.content}</p>
        </div>
      </div>
    </div>
  )
}

export function AccordionAnimatedRadio() {
  const [activeId, setActiveId] = useState(-1)

  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      {items.map((item, index) => (
        <AccordionAnimatedRadioItem
          key={index}
          item={item}
          index={index}
          open={activeId === index}
          setActiveId={setActiveId}
        />
      ))}
    </div>
  )
}

function AccordionAnimatedRadioItem({
  item,
  index,
  open,
  setActiveId,
}: {
  item: { heading: string; content: string }
  index: number
  open: boolean
  setActiveId: Dispatch<SetStateAction<number>>
}) {
  return (
    <div className="rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div
        className="flex cursor-pointer p-4"
        onClick={() => (open ? setActiveId(-1) : setActiveId(index))}
      >
        <h3 className="basis-full text-lg font-bold">{item.heading}</h3>
        <MaterialSymbolsKeyboardArrowDownRounded
          className={`${
            open ? 'rotate-180' : ''
          } text-light-text-secondary transition-transform dark:text-dark-text-secondary`}
          width="28"
          height="28"
        />
      </div>
      <div
        className={`${
          open ? '[grid-template-rows:1fr]' : '[grid-template-rows:0fr]'
        } grid text-light-text-secondary transition-[grid-template-rows] dark:text-dark-text-secondary`}
      >
        <div className="overflow-hidden">
          <p className="mx-4 mb-4">{item.content}</p>
        </div>
      </div>
    </div>
  )
}
