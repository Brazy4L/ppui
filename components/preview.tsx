import { useState, useContext, ElementType } from 'react'
import { Icon } from '@iconify-icon/react'
import { Options } from '@/components/componentsLayout'
import { Rnd } from 'react-rnd'
import useResizeObserver from 'use-resize-observer'

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
  viewportWidth: number
  element: boolean
}

export default function Preview({
  name,
  Comp,
  code,
  preCode,
  viewportWidth,
  element,
}: Props) {
  const [preview, setPreview] = useState(true)
  const contextOptions = useContext(Options)
  const { ref, width } = useResizeObserver({ box: 'border-box' })

  return (
    <div className="mb-4 mt-4 lg:mt-0">
      <div className="flex flex-wrap items-center justify-center gap-4 font-semibold sm:justify-between">
        <div className="flex items-center gap-2">
          <h2>{name}</h2>
          <div className="flex  gap-2 rounded-lg bg-light-bg-secondary p-2 font-mono dark:bg-dark-bg-secondary">
            <Icon
              icon="material-symbols:width-rounded"
              className="text-light-text-secondary dark:text-dark-text-secondary"
              width="24"
              height="24"
            />
            <div className="w-[4ch] text-center">{width}</div>
            <div>px</div>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded-lg bg-light-bg-secondary p-1 dark:bg-dark-bg-secondary">
          <button
            className={'flex justify-center gap-2 rounded-lg p-2 transition-colors hover:text-light-primary dark:hover:text-dark-primary '.concat(
              preview
                ? 'bg-light-bg-primary text-light-primary dark:bg-dark-bg-primary dark:text-dark-primary'
                : ''
            )}
            onClick={() => setPreview(true)}
          >
            <Icon
              icon="material-symbols:mimo-outline-rounded"
              className="text-light-text-secondary dark:text-dark-text-secondary"
              width="24"
              height="24"
            />
            <div>Preview</div>
          </button>
          <button
            className={'flex justify-center gap-2 rounded-lg p-2 transition-colors hover:text-light-primary dark:hover:text-dark-primary '.concat(
              !preview
                ? 'bg-light-bg-primary text-light-primary dark:bg-dark-bg-primary dark:text-dark-primary'
                : ''
            )}
            onClick={() => setPreview(false)}
          >
            <Icon
              icon="material-symbols:code-rounded"
              className="text-light-text-secondary dark:text-dark-text-secondary"
              width="24"
              height="24"
            />
            <div>Code</div>
          </button>
        </div>
        <button
          className="group h-8 w-8 rounded-full p-1 ring-1 ring-light-bg-alternative dark:ring-dark-bg-alternative"
          onClick={() =>
            navigator.clipboard.writeText(preCode[contextOptions.framework])
          }
        >
          <Icon
            icon="material-symbols:content-copy-outline-rounded"
            className="cursor-pointer text-light-text-secondary transition-colors group-focus:text-light-primary dark:text-dark-text-secondary dark:group-focus:text-dark-primary"
            width="24"
            height="24"
          />
        </button>
      </div>
      {preview ? (
        <div className="mt-4">
          <Rnd
            default={{ x: 0, y: 0, width: '100%', height: 'auto' }}
            minWidth={
              element && viewportWidth > 336
                ? 288
                : !element && viewportWidth > 368
                ? 320
                : 271
            }
            maxWidth={1280}
            bounds="parent"
            disableDragging={true}
            enableResizing={{
              top: false,
              right: true,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
            style={{ position: 'static' }}
            resizeHandleStyles={{ right: { right: '-8px', width: '8px' } }}
            resizeHandleComponent={{ right: <Handle /> }}
          >
            <div ref={ref} className="flex justify-center">
              <Comp />
            </div>
          </Rnd>
        </div>
      ) : (
        <div
          className="scrbar codebar mt-4 overflow-x-auto rounded-lg border-2 border-dark-bg-alternative bg-dark-bg-secondary p-4"
          dangerouslySetInnerHTML={{ __html: code[contextOptions.framework] }}
        ></div>
      )}
    </div>
  )
}

function Handle() {
  return (
    <div className="relative left-[8px] top-[calc(50%-2rem)] h-16 w-2 rounded-lg bg-light-bg-alternative dark:bg-dark-bg-alternative"></div>
  )
}
