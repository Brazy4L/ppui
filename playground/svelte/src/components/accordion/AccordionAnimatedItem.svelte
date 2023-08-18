<script lang="ts">
  import MaterialSymbolsKeyboardArrowDownRounded from '~icons/material-symbols/keyboard-arrow-down-rounded'

  export let item: { heading: string; content: string }

  let open = false
</script>

<div class="rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary">
  <div
    class="grid cursor-pointer grid-flow-col items-center gap-4 p-4"
    on:click={() => (open = !open)}
    on:keydown={(e) =>
      (e.code === 'Enter' || e.code === 'Space') && (open = !open)}
    tabindex={0}
    role="button"
    aria-expanded={open}
  >
    <h3 class="font-bold sm:text-lg">{item.heading}</h3>
    <MaterialSymbolsKeyboardArrowDownRounded
      class={`${
        open ? 'rotate-180' : ''
      } justify-self-end text-light-text-secondary transition-transform dark:text-dark-text-secondary`}
      width="28"
      height="28"
    />
  </div>
  <div
    class={`${
      open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
    } grid text-light-text-secondary transition-[grid-template-rows] dark:text-dark-text-secondary`}
  >
    <div class="overflow-hidden">
      <p class="mx-4 mb-4">{item.content}</p>
    </div>
  </div>
</div>
