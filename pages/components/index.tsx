import { getHighlighter } from 'shiki'
import BaseHead from '@/components/baseHead'
import Link from 'next/link'

const codeBlocks = {
  tw: `module.exports = {
content: [], // paths to your files
// darkMode: 'class', // uncomment to toggle theme manually
theme: {
  extend: {
    colors: {
      // dark theme
      'dark-primary': '#b687fb', // primary color
      'dark-secondary': '#d5bafd', // close to ↑
      'dark-bg-primary': '#121212', // main background
      'dark-bg-secondary': '#1e1e1e', // complementary background
      'dark-bg-alternative': '#2b2b2b', // complementary background
      'dark-text-primary': '#fff', // primary text
      'dark-text-secondary': '#858585', // lower contrast text
      // light theme
      'light-primary': '#7402ed', // primary color
      'light-secondary': '#5102a7', // close to ↑
      'light-bg-primary': '#fefefe', // main background
      'light-bg-secondary': '#f9f7fd', // complementary background
      'light-bg-alternative': '#ede7f9', // complementary background
      'light-text-primary': '#000', // primary text
      'light-text-secondary': '#727272', // lower contrast text
      },
    },
  },
  plugins: [],
}
`,
  react: 'npm install --save-dev @iconify-icon/react',
  solid: 'npm install --save-dev @iconify-icon/solid',
  vueAndSvelte: 'npm install --save-dev iconify-icon',
}

export default function Components(props: any) {
  return (
    <div className="mx-auto mt-4 flex w-full max-w-2xl flex-col gap-4 lg:mt-0">
      <BaseHead title="Components" />
      <h2 className="text-2xl font-semibold">Usage</h2>
      <p>Add preset of colors to your tailwind config:</p>
      <Code code={props.code.tw} />
      <p>Then install Iconify for your framework:</p>
      <ul className="flex flex-col gap-4">
        <ListItem name="React" />
        <Code code={props.code.react} />
        <ListItem name="Solid" />
        <Code code={props.code.solid} />
        <ListItem name="Vue and Svelte" />
        <Code code={props.code.vueAndSvelte} />
      </ul>
      <h2 className="mt-4 text-2xl font-semibold">Credits</h2>
      <ul className="flex flex-col gap-4">
        <li>PPUI uses:</li>
        <ListItem>
          <OutLink
            href="https://github.com/google/material-design-icons"
            name="Material Icons"
          />{' '}
          by Google
        </ListItem>
        <ListItem>
          <OutLink
            href="https://github.com/gilbarbara/logos"
            name="SVG Logos"
          />{' '}
          by <OutLink href="https://github.com/gilbarbara" name="Gil Barbara" />
        </ListItem>
        <ListItem>
          and <OutLink href="https://iconify.design" name="Iconify" />
        </ListItem>
      </ul>
    </div>
  )
}

function ListItem({ name, children }: { name?: string; children?: any }) {
  return (
    <li className="flex items-center gap-2">
      <div className="h-3 w-3 rounded-sm bg-light-primary dark:bg-dark-primary"></div>
      <div>
        {name}
        {children}
      </div>
    </li>
  )
}

function Code({ code }: any) {
  return (
    <div
      className="scrbar codebar overflow-x-auto rounded-lg border-2 border-dark-bg-alternative bg-dark-bg-secondary p-4"
      dangerouslySetInnerHTML={{ __html: code }}
    ></div>
  )
}

function OutLink({ href, name }: any) {
  return (
    <Link
      className="text-light-primary transition-colors hover:text-light-secondary dark:text-dark-primary dark:hover:text-dark-secondary"
      href={href}
      target="_blank"
    >
      {name}
    </Link>
  )
}

export async function getStaticProps() {
  const loopAndHighlight = (
    object: { [x: string]: string },
    highlighter: any
  ) => {
    const obj: { [x: string]: string } = {}

    for (const key in object) {
      if (key === 'tw') {
        obj[key] = highlighter.codeToHtml(object[key], {
          lang: 'js',
        })
      } else {
        obj[key] = highlighter.codeToHtml(object[key], {
          lang: 'sh',
        })
      }
    }
    return obj
  }

  const highlighter = await getHighlighter({
    theme: 'dark-plus',
  })

  return {
    props: {
      code: loopAndHighlight(codeBlocks, highlighter),
    },
  }
}
