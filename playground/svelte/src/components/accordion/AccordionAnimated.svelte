<script lang="ts">
  import AccordionAnimatedItem from './AccordionAnimatedItem.svelte'

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
  {#each items as item}
    <AccordionAnimatedItem {item} />
  {/each}
</div>
