<script setup lang="ts">
import { ref } from 'vue'
import MaterialSymbolsKeyboardArrowDownRounded from '~icons/material-symbols/keyboard-arrow-down-rounded'

defineProps<{
  item: {
    heading: string
    content: string
  }
}>()

const open = ref(false)
</script>

<template>
  <div class="rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary">
    <div
      class="grid cursor-pointer grid-flow-col items-center gap-4 p-4"
      @click="open = !open"
      @keydown.enter="open = !open"
      @keydown.space="open = !open"
      tabindex="0"
      role="button"
      :aria-expanded="open"
    >
      <h3 class="font-bold sm:text-lg">{{ item.heading }}</h3>
      <MaterialSymbolsKeyboardArrowDownRounded
        class="justify-self-end text-light-text-secondary transition-transform dark:text-dark-text-secondary"
        :class="{ 'rotate-180': open }"
        width="28"
        height="28"
      />
    </div>
    <div
      class="grid text-light-text-secondary transition-[grid-template-rows] dark:text-dark-text-secondary"
      :class="{ 'grid-rows-[1fr]': open, 'grid-rows-[0fr]': !open }"
    >
      <div class="overflow-hidden">
        <p class="mx-4 mb-4">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
