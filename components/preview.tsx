import { useState } from 'react'
import { Icon } from '@iconify-icon/react'
import { ComponentAccordionRegularOne } from './components/accordion'
import { react } from '@/data/components/accordion'

export default function Preview() {
  const [preview, setPreview] = useState(true)
  return (
    <>
      <div className="flex justify-between gap-4 font-semibold">
        <h2 className="p-3">Regular One</h2>
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
        <Icon
          icon="material-symbols:content-copy-outline-rounded"
          className="cursor-pointer rounded-lg p-3 text-light-text-secondary transition-colors dark:text-dark-text-secondary"
          width="24"
          height="24"
          onClick={() => navigator.clipboard.writeText(react)}
        />
      </div>
      <div className="mt-2 rounded-lg border-2 border-light-bg-alternative bg-light-bg-secondary p-2 dark:border-dark-bg-alternative dark:bg-dark-bg-secondary">
        {preview ? (
          <ComponentAccordionRegularOne />
        ) : (
          <code className="overflow-x-auto whitespace-pre">{react}</code>
        )}
      </div>
    </>
  )
}
