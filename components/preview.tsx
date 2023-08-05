import { useState, useContext, ElementType } from 'react'
import { Icon } from '@iconify-icon/react'
import { Options } from '@/components/componentsLayout'

interface Props {
  name: string
  Comp: ElementType
  code:
    | {
        react: HTMLElement
        vue: HTMLElement
        svelte: HTMLElement
        solid: HTMLElement
      }
    | any
  preCode:
    | {
        react: string
        vue: string
        svelte: string
        solid: string
      }
    | any
}

export default function Preview({ name, Comp, code, preCode }: Props) {
  const [preview, setPreview] = useState(true)
  const contextOptions = useContext(Options)

  return (
    <div className="mb-4 mt-4 lg:mt-0">
      <div className="flex flex-wrap items-center justify-center gap-4 font-semibold lg:justify-between">
        <h2>{name}</h2>
        <div className="grid grid-cols-2 rounded-lg bg-light-bg-secondary p-1 dark:bg-dark-bg-secondary">
          <button
            className={'rounded-lg p-2 transition-colors hover:text-light-primary dark:hover:text-dark-primary '.concat(
              preview
                ? 'bg-light-bg-primary text-light-primary dark:bg-dark-bg-primary dark:text-dark-primary'
                : ''
            )}
            onClick={() => setPreview(true)}
          >
            Preview
          </button>
          <button
            className={'rounded-lg p-2 transition-colors hover:text-light-primary dark:hover:text-dark-primary '.concat(
              !preview
                ? 'bg-light-bg-primary text-light-primary dark:bg-dark-bg-primary dark:text-dark-primary'
                : ''
            )}
            onClick={() => setPreview(false)}
          >
            Code
          </button>
        </div>
        <button
          className="h-8 w-8 rounded-full p-1 ring-1 ring-light-bg-alternative dark:ring-dark-bg-alternative"
          onClick={() =>
            navigator.clipboard.writeText(preCode[contextOptions.framework])
          }
        >
          <Icon
            icon="material-symbols:content-copy-outline-rounded"
            className="cursor-pointer text-light-text-secondary dark:text-dark-text-secondary"
            width="24"
            height="24"
          />
        </button>
      </div>
      {preview ? (
        <div className="mt-2 flex justify-center">
          <Comp />
        </div>
      ) : (
        <div
          className="mt-2 overflow-x-auto rounded-lg border-2 border-dark-bg-alternative bg-dark-bg-secondary p-4"
          dangerouslySetInnerHTML={{ __html: code[contextOptions.framework] }}
        ></div>
      )}
    </div>
  )
}
