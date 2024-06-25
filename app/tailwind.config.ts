import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { fontFamily } from 'tailwindcss/defaultTheme';
import { addDynamicIconSelectors } from '@iconify/tailwind';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans]
      },
      maxWidth: {
        '8xl': '90rem'
      },
      spacing: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem'
      }
    },
  },
  plugins: [
    forms,
    typography,
    skeleton({
      themes: {
        preset: [
          {
            name: 'hamlindigo',
            enhancements: true,
          },
          {
            name: 'wintry',
            enhancements: true,
          }
        ],
      },
    }),
    addDynamicIconSelectors()
  ],
} satisfies Config;
