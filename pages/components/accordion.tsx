import { useContext } from 'react'
import { Options } from '@/components/componentsLayout'
import BaseHead from '@/components/baseHead'
import { Icon } from '@iconify-icon/react'

export default function Accordion() {
  const contextOptions = useContext(Options)

  return (
    <>
      <BaseHead title="Accordion - Components" />
      <div>{contextOptions.framework}</div>
      <div>{contextOptions.css}</div>
      <div>{contextOptions.js}</div>
      <div className="w-full rounded-2xl bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <details className="group">
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
        <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
        <details className="group">
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
        <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
        <details className="group">
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
        <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
        <details className="group">
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
      {/* {} */}
      <div className="flex w-full flex-col gap-4">
        <details className="group rounded-2xl bg-light-bg-secondary dark:bg-dark-bg-secondary">
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
        <details className="group rounded-2xl bg-light-bg-secondary dark:bg-dark-bg-secondary">
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
        <details className="group rounded-2xl bg-light-bg-secondary dark:bg-dark-bg-secondary">
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
        <details className="group rounded-2xl bg-light-bg-secondary dark:bg-dark-bg-secondary">
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
    </>
  )
}
