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
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      {items.map((item, index) => (
        <details
          key={index}
          className="group rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary"
        >
          <summary className="grid cursor-pointer grid-flow-col items-center gap-4 p-4 [&::-webkit-details-marker]:hidden">
            <h3 className="font-bold @sm:text-lg">{item.heading}</h3>
            <MaterialSymbolsKeyboardArrowDownRounded
              className="justify-self-end text-light-text-secondary group-open:rotate-180 dark:text-dark-text-secondary"
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
