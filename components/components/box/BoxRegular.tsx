import { useState } from 'react'

const text =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, repellendus modi quod quasi sunt voluptatem provident ex? Quis, officia provident sed ut iste quod delectus dolorem recusandae sit nihil? Perspiciatis temporibus ducimus minus reiciendis consectetur, id, vero, blanditiis mollitia ea deleniti aliquid. Vel harum odit corrupti beatae veniam quos ratione, sequi veritatis adipisci quis minima temporibus libero dolor quod perspiciatis at reiciendis nisi. Voluptas sunt repellat quidem omnis? Explicabo tempora totam, nisi enim veritatis ipsum reiciendis libero sit consequatur obcaecati dolorem nulla illum velit neque quisquam expedita quibusdam! Blanditiis cumque esse impedit dignissimos nesciunt quae commodi magnam accusamus qui repellendus!'

export default function Box() {
  const [more, setMore] = useState(false)

  return (
    <div className="max-w-xl">
      <p className={more ? '' : 'line-clamp-3 '}>{text}</p>
      <button
        className="mt-4 flex w-full justify-center rounded-lg bg-light-bg-secondary p-3 font-semibold transition-colors hover:bg-light-bg-alternative dark:bg-dark-bg-secondary dark:hover:bg-dark-bg-alternative"
        onClick={() => setMore(!more)}
      >
        {more ? 'less' : 'MORE'}
      </button>
    </div>
  )
}
