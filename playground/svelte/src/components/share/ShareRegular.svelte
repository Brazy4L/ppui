<script lang="ts">
  import MaterialSymbolsShare from '~icons/material-symbols/share'
</script>

<button
  class="rounded-full bg-light-bg-secondary p-2 transition-colors hover:bg-light-bg-alternative dark:bg-dark-bg-secondary dark:hover:bg-dark-bg-alternative"
  on:click={() => {
    if (navigator.share) {
      navigator.share({
        url: document.URL,
      })
    } else {
      navigator.clipboard.writeText(document.URL)
    }
  }}
>
  <MaterialSymbolsShare
    className="text-light-text-secondary dark:text-dark-text-secondary"
    width="28"
    height="28"
  />
</button>
