import { createSignal, For, Setter } from 'solid-js'
import MaterialSymbolsKeyboardArrowDownRounded from '~icons/material-symbols/keyboard-arrow-down-rounded'

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
  const [activeId, setActiveId] = createSignal(-1)

  return (
    <div class="flex w-full max-w-xl flex-col gap-4">
      <For each={items}>
        {(item, index) => (
          <AccordionItem
            item={item}
            index={index()}
            open={activeId() === index()}
            setActiveId={setActiveId}
          />
        )}
      </For>
    </div>
  )
}

function AccordionItem(props: {
  item: { heading: string; content: string }
  index: number
  open: boolean
  setActiveId: Setter<number>
}) {
  return (
    <div class="rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div
        class="grid cursor-pointer grid-flow-col items-center gap-4 p-4"
        onclick={() =>
          props.open ? props.setActiveId(-1) : props.setActiveId(props.index)
        }
        onkeydown={(e) =>
          (e.code === 'Enter' || e.code === 'Space') &&
          (props.open ? props.setActiveId(-1) : props.setActiveId(props.index))
        }
        tabindex={0}
        role="button"
        aria-expanded={props.open}
      >
        <h3 class="font-bold sm:text-lg">{props.item.heading}</h3>
        <MaterialSymbolsKeyboardArrowDownRounded
          class={`${
            props.open ? 'rotate-180' : ''
          } justify-self-end text-light-text-secondary transition-transform dark:text-dark-text-secondary`}
          width="28"
          height="28"
        />
      </div>
      <div
        class={`${
          props.open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        } grid text-light-text-secondary transition-[grid-template-rows] dark:text-dark-text-secondary`}
      >
        <div class="overflow-hidden">
          <p class="mx-4 mb-4">{props.item.content}</p>
        </div>
      </div>
    </div>
  )
}
