import { useState, useContext, ElementType, useEffect } from 'react'
import { Options } from '@/components/componentsLayout'
import { Rnd } from 'react-rnd'
import useResizeObserver from 'use-resize-observer'
import MaterialSymbolsWidthRounded from '~icons/material-symbols/width-rounded'
import MaterialSymbolsMimoOutlineRounded from '~icons/material-symbols/mimo-outline-rounded'
import MaterialSymbolsCodeRounded from '~icons/material-symbols/code-rounded'
import MaterialSymbolsContentCopyOutlineRounded from '~icons/material-symbols/content-copy-outline-rounded'
import MaterialSymbolsContentCopyRounded from '~icons/material-symbols/content-copy-rounded'

interface Props {
  name: string
  Comp: ElementType
  code: {
    [x: string]: Item[]
    react: Item[]
    vue: Item[]
    svelte: Item[]
    solid: Item[]
  }
  viewportWidth: number
  element: boolean
}

interface Item {
  tab: string
  path: string
  code: string
  highlightedCode: string
}

export default function Preview({
  name,
  Comp,
  code,
  viewportWidth,
  element,
}: Props) {
  const contextOptions = useContext(Options)
  const [preview, setPreview] = useState(true)
  const [activeId, setActiveId] = useState(0)
  const [copy, setCopy] = useState(true)
  const [timeO, setTimeO] = useState<NodeJS.Timeout>()
  const { ref, width } = useResizeObserver({ box: 'border-box' })

  useEffect(() => {
    setActiveId(0)
  }, [contextOptions.framework])

  return (
    <div>
      <div className="flex grid-cols-3 flex-wrap items-center justify-center gap-4 font-semibold xl:grid">
        <h2>{name}</h2>
        <div className="grid grid-cols-2 rounded-lg bg-light-bg-secondary p-1 dark:bg-dark-bg-secondary">
          <button
            className={'flex justify-center gap-2 rounded-lg p-2 transition-colors hover:text-light-primary dark:hover:text-dark-primary '.concat(
              preview
                ? 'bg-light-bg-primary text-light-primary dark:bg-dark-bg-primary dark:text-dark-primary'
                : ''
            )}
            onClick={() => setPreview(true)}
          >
            <MaterialSymbolsMimoOutlineRounded
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
            <MaterialSymbolsCodeRounded
              className="text-light-text-secondary dark:text-dark-text-secondary"
              width="24"
              height="24"
            />
            <div>Code</div>
          </button>
        </div>
        <div className="flex items-center gap-2 justify-self-end">
          <div className="flex gap-2 rounded-lg bg-light-bg-secondary p-2 font-mono dark:bg-dark-bg-secondary">
            <MaterialSymbolsWidthRounded
              className="text-light-text-secondary dark:text-dark-text-secondary"
              width="24"
              height="24"
            />
            <div className="w-[4ch] text-center">{width}</div>
            <div>px</div>
          </div>
          <button
            className="rounded-full p-1 ring-1 ring-light-bg-alternative dark:ring-dark-bg-alternative"
            onClick={() => {
              navigator.clipboard.writeText(
                code[contextOptions.framework][activeId].code
              )
              copy
                ? (() => {
                    setTimeO(setTimeout(() => setCopy(true), 1000))
                    setCopy(false)
                  })()
                : (() => {
                    clearTimeout(timeO)
                    setTimeO(setTimeout(() => setCopy(true), 1000))
                  })()
            }}
            title="Copy"
          >
            {copy ? (
              <MaterialSymbolsContentCopyOutlineRounded
                className="text-light-text-secondary dark:text-dark-text-secondary"
                width="24"
                height="24"
              />
            ) : (
              <MaterialSymbolsContentCopyRounded
                className="text-light-success dark:text-dark-success"
                width="24"
                height="24"
              />
            )}
          </button>
        </div>
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
            <div ref={ref} className="flex justify-center @container">
              <Comp />
            </div>
          </Rnd>
        </div>
      ) : (
        <>
          {code[contextOptions.framework].length > 1 && (
            <nav className="scrbar mt-4 flex gap-4 overflow-y-auto">
              {code[contextOptions.framework].map((item, index) => (
                <button
                  key={index}
                  className={`${
                    activeId === index
                      ? 'bg-light-bg-secondary dark:bg-dark-bg-secondary'
                      : 'text-light-text-secondary dark:text-dark-text-secondary'
                  } rounded-lg p-2 font-mono transition-colors hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary`}
                  onClick={() => setActiveId(index)}
                >
                  {item.tab}
                </button>
              ))}
            </nav>
          )}
          <div
            className="scrbar codebar mt-4 overflow-x-auto rounded-lg border-2 border-dark-bg-alternative bg-dark-bg-secondary p-4"
            dangerouslySetInnerHTML={{
              __html: code[contextOptions.framework][activeId]?.highlightedCode
                ? code[contextOptions.framework][activeId].highlightedCode
                : code[contextOptions.framework][0].highlightedCode,
            }}
          ></div>
        </>
      )}
    </div>
  )
}

function Handle() {
  return (
    <div className="relative left-[8px] top-[calc(50%-2rem)] h-16 w-2 rounded-lg bg-light-bg-alternative dark:bg-dark-bg-alternative"></div>
  )
}
