export const accordionRegularOne = {
  react: `import { Icon } from '@iconify-icon/react'
import { Fragment } from 'react'

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

export default function Accordion() {
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
              <Icon
                icon="material-symbols:keyboard-arrow-down-rounded"
                className="h-fit text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
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
`,
  vue: `<script setup lang="ts">
import 'iconify-icon'

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
</script>

<template>
  <div
    class="w-full max-w-xl rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary"
  >
    <template v-for="(item, index) in items">
      <hr
        class="border-light-bg-alternative dark:border-dark-bg-alternative"
        v-if="index > 0"
      />
      <details class="group">
        <summary class="flex cursor-pointer p-4">
          <h3 class="basis-full text-lg font-bold">{{ item.heading }}</h3>
          <iconify-icon
            icon="material-symbols:keyboard-arrow-down-rounded"
            class="h-fit text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
            width="28"
            height="28"
          />
        </summary>
        <p
          class="px-4 pb-4 text-light-text-secondary dark:text-dark-text-secondary"
        >
          {{ item.content }}
        </p>
      </details>
    </template>
  </div>
</template>
`,
  svelte: `<script lang="ts">
  import 'iconify-icon'

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
</script>

<div
  class="w-full max-w-xl rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary"
>
  {#each items as { heading, content }, index}
    {#if index > 0}
      <hr class="border-light-bg-alternative dark:border-dark-bg-alternative" />
    {/if}
    <details class="group">
      <summary class="flex cursor-pointer p-4">
        <h3 class="basis-full text-lg font-bold">{heading}</h3>
        <iconify-icon
          icon="material-symbols:keyboard-arrow-down-rounded"
          class="h-fit text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
          width="28"
          height="28"
        />
      </summary>
      <p
        class="px-4 pb-4 text-light-text-secondary dark:text-dark-text-secondary"
      >
        {content}
      </p>
    </details>
  {/each}
</div>
`,
  solid: `import { For, Show } from 'solid-js'
import { Icon } from '@iconify-icon/solid'

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

export default function Accordion() {
  return (
    <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary w-full max-w-xl rounded-lg">
      <For each={items}>
        {(item, index) => (
          <>
            <Show when={index() > 0}>
              <hr class="border-light-bg-alternative dark:border-dark-bg-alternative" />
            </Show>
            <details class="group">
              <summary class="flex cursor-pointer p-4">
                <h3 class="basis-full text-lg font-bold">{item.heading}</h3>
                <Icon
                  icon="material-symbols:keyboard-arrow-down-rounded"
                  class="text-light-text-secondary dark:text-dark-text-secondary h-fit group-open:rotate-180"
                  width="28"
                  height="28"
                />
              </summary>
              <p class="text-light-text-secondary dark:text-dark-text-secondary px-4 pb-4">
                {item.content}
              </p>
            </details>
          </>
        )}
      </For>
    </div>
  )
}
`,
}

export const accordionRegularTwo = {
  react: `import { Icon } from '@iconify-icon/react'

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

export default function Accordion() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      {items.map((item, index) => (
        <details
          key={index}
          className="group rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary"
        >
          <summary className="flex cursor-pointer p-4">
            <span className="basis-full text-lg font-bold">{item.heading}</span>
            <Icon
              icon="material-symbols:keyboard-arrow-down-rounded"
              className="h-fit text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
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
`,
  vue: `<script setup lang="ts">
import 'iconify-icon'

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
</script>

<template>
  <div class="flex w-full max-w-xl flex-col gap-4">
    <details
      class="group rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary"
      v-for="item in items"
    >
      <summary class="flex cursor-pointer p-4">
        <span class="basis-full text-lg font-bold">{{ item.heading }}</span>
        <iconify-icon
          icon="material-symbols:keyboard-arrow-down-rounded"
          class="h-fit text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
          width="28"
          height="28"
        />
      </summary>
      <p
        class="px-4 pb-4 text-light-text-secondary dark:text-dark-text-secondary"
      >
        {{ item.content }}
      </p>
    </details>
  </div>
</template>  
`,
  svelte: `<script lang="ts">
  import 'iconify-icon'

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
</script>

<div class="flex w-full max-w-xl flex-col gap-4">
  {#each items as { heading, content }}
    <details
      class="group rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary"
    >
      <summary class="flex cursor-pointer p-4">
        <span class="basis-full text-lg font-bold">{heading}</span>
        <iconify-icon
          icon="material-symbols:keyboard-arrow-down-rounded"
          class="h-fit text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
          width="28"
          height="28"
        />
      </summary>
      <p
        class="px-4 pb-4 text-light-text-secondary dark:text-dark-text-secondary"
      >
        {content}
      </p>
    </details>
  {/each}
</div>
`,
  solid: `import { For } from 'solid-js'
import { Icon } from '@iconify-icon/solid'

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

export default function Accordion() {
  return (
    <div class="flex w-full max-w-xl flex-col gap-4">
      <For each={items}>
        {(item) => (
          <details class="bg-light-bg-secondary dark:bg-dark-bg-secondary group rounded-lg">
            <summary class="flex cursor-pointer p-4">
              <span class="basis-full text-lg font-bold">{item.heading}</span>
              <Icon
                icon="material-symbols:keyboard-arrow-down-rounded"
                class="text-light-text-secondary dark:text-dark-text-secondary h-fit group-open:rotate-180"
                width="28"
                height="28"
              />
            </summary>
            <p class="text-light-text-secondary dark:text-dark-text-secondary px-4 pb-4">
              {item.content}
            </p>
          </details>
        )}
      </For>
    </div>
  )
}
`,
}
