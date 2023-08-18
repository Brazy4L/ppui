import { useContext } from 'react'
import Link from 'next/link'
import { getHighlighter, Highlighter } from 'shiki'
import { Options } from '@/components/componentsLayout'
import BaseHead from '@/components/baseHead'

const codeBlocks = {
  tw: `module.exports = {
  content: [],
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
        'dark-success': '#42ff8b', // green
        'dark-warning': '#ffef42', // yellow
        'dark-failure': '#ff9b9b', // red
        // light theme
        'light-primary': '#7402ed', // primary color
        'light-secondary': '#5102a7', // close to ↑
        'light-bg-primary': '#fefefe', // main background
        'light-bg-secondary': '#f9f7fd', // complementary background
        'light-bg-alternative': '#ede7f9', // complementary background
        'light-text-primary': '#000', // primary text
        'light-text-secondary': '#727272', // lower contrast text
        'light-success': '#009b3b', // green
        'light-warning': '#ff9500', // orange
        'light-failure': '#d60000', // red
      },
    },
  },
  plugins: [],
}
`,
  bodyReact: `<body className="bg-light-bg-primary text-light-text-primary dark:bg-dark-bg-primary dark:text-dark-text-primary">
  <!-- DOM -->
</body>
`,
  bodyRest: `<body class="bg-light-bg-primary text-light-text-primary dark:bg-dark-bg-primary dark:text-dark-text-primary">
  <!-- DOM -->
</body>
`,
}

export default function Components(props: any) {
  const contextOptions = useContext(Options)

  return (
    <div className="mx-auto mt-4 flex w-full max-w-2xl flex-col gap-4 lg:mt-0">
      <BaseHead title="Components" description="Get started with PPUI" />
      <h1 className="text-center text-xl font-semibold">Intro</h1>
      <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
      <h2 className="text-lg font-semibold">Usage</h2>
      <p>
        Add preset of colors to your{' '}
        <span className="font-semibold">tailwind</span> config:
      </p>
      <Code code={props.code.tw} />
      <p>
        Apply these classes to your <span className="font-semibold">body</span>{' '}
        tag:
      </p>
      {contextOptions.framework === 'react' ? (
        <Code code={props.code.bodyReact} />
      ) : (
        <Code code={props.code.bodyRest} />
      )}
      <p>
        In order to enjoy icons that are used in components, install{' '}
        <OutLink
          href="https://github.com/antfu/unplugin-icons#install"
          name="unplugin-icons"
        />
        . The icon set that is being used here is{' '}
        <span className="font-semibold">@iconify-json/material-symbols</span>.
      </p>
      <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
      <h2 className="text-lg font-semibold">Details</h2>
      <p>
        Every component is designed for{' '}
        <span className="font-semibold">320 px</span> minimum width, with
        support for dark and light mode. By default tailwind applies theme that
        is currently being used in OS/Browser. You can opt out by changing your{' '}
        <OutLink
          href="https://tailwindcss.com/docs/dark-mode"
          name="tailwind config"
        />
        .
      </p>
      <hr className="border-light-bg-alternative dark:border-dark-bg-alternative" />
      <h2 className="text-lg font-semibold">Credits</h2>
      <p>
        <span className="font-semibold">PPUI</span> uses:{' '}
        <OutLink
          href="https://github.com/google/material-design-icons"
          name="Material Icons"
        />{' '}
        by Google,{' '}
        <OutLink href="https://github.com/gilbarbara/logos" name="SVG Logos" />{' '}
        by <OutLink href="https://github.com/gilbarbara" name="Gil Barbara" />{' '}
        (only framework icons) and{' '}
        <OutLink
          href="https://github.com/antfu/unplugin-icons"
          name="unplugin-icons"
        />{' '}
        to manage them with ease.
      </p>
    </div>
  )
}

function Code({ code }: { code: string }) {
  return (
    <div
      className="scrbar codebar overflow-x-auto rounded-lg border-2 border-dark-bg-alternative bg-dark-bg-secondary p-4"
      dangerouslySetInnerHTML={{ __html: code }}
    ></div>
  )
}

function OutLink({ href, name }: { href: string; name: string }) {
  return (
    <Link
      className="text-light-primary transition-colors hover:text-light-secondary hover:underline dark:text-dark-primary dark:hover:text-dark-secondary"
      href={href}
      target="_blank"
    >
      {name}
    </Link>
  )
}

export async function getStaticProps() {
  const highlighter = await getHighlighter({
    theme: 'dark-plus',
  })

  const loopAndHighlight = (
    object: { [x: string]: string },
    highlighter: Highlighter
  ) => {
    const obj: typeof object = {}

    for (const key in object) {
      obj[key] = highlighter.codeToHtml(
        object[key],
        key === 'tw'
          ? { lang: 'js' }
          : key === 'bodyReact' || key === 'bodyRest'
          ? { lang: 'html' }
          : { lang: 'sh' }
      )
    }

    return obj
  }

  return {
    props: {
      code: loopAndHighlight(codeBlocks, highlighter),
    },
  }
}
