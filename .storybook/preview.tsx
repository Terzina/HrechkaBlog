import type { Preview } from '@storybook/nextjs-vite'

import '../src/app/globals.css'
import { ThemeProvider } from 'next-themes'

import ThemeSwitch from '../src/components/UI/ThemeSwitch/ThemeSwitch'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute='class'>
        <div className='flex justify-end mb-4'>
          <ThemeSwitch />
        </div>
        <Story />
      </ThemeProvider>
    ),
    (Story) => (
      <>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <Story />
      </>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview
