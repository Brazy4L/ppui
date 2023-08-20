import MaterialSymbolsShare from '~icons/material-symbols/share'

export default function Share() {
  return (
    <button
      className="rounded-full bg-light-bg-secondary p-2 transition-colors hover:bg-light-bg-alternative dark:bg-dark-bg-secondary dark:hover:bg-dark-bg-alternative"
      onClick={() => {
        if (navigator.share) {
          navigator.share({
            url: document.URL,
          })
        } else {
          navigator.clipboard.writeText(document.URL)
        }
      }}
      title="Share"
    >
      <MaterialSymbolsShare
        className="text-light-text-secondary dark:text-dark-text-secondary"
        width="28"
        height="28"
      />
    </button>
  )
}
