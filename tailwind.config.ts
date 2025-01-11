import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark: {
        0: 'var(--mantine-color-dark-0)',
        1: 'var(--mantine-color-dark-1)',
        2: 'var(--mantine-color-dark-2)',
        3: 'var(--mantine-color-dark-3)',
        4: 'var(--mantine-color-dark-4)',
        5: 'var(--mantine-color-dark-5)',
        6: 'var(--mantine-color-dark-6)',
        7: 'var(--mantine-color-dark-7)',
        8: 'var(--mantine-color-dark-8)',
        9: 'var(--mantine-color-dark-9)',
      },
      gray: {
        0: 'var(--mantine-color-gray-0)',
        1: 'var(--mantine-color-gray-1)',
        2: 'var(--mantine-color-gray-2)',
        3: 'var(--mantine-color-gray-3)',
        4: 'var(--mantine-color-gray-4)',
        5: 'var(--mantine-color-gray-5)',
        6: 'var(--mantine-color-gray-6)',
        7: 'var(--mantine-color-gray-7)',
        8: 'var(--mantine-color-gray-8)',
        9: 'var(--mantine-color-gray-9)',
      },
      red: {
        0: 'var(--mantine-color-red-0)',
        1: 'var(--mantine-color-red-1)',
        2: 'var(--mantine-color-red-2)',
        3: 'var(--mantine-color-red-3)',
        4: 'var(--mantine-color-red-4)',
        5: 'var(--mantine-color-red-5)',
        6: 'var(--mantine-color-red-6)',
        7: 'var(--mantine-color-red-7)',
        8: 'var(--mantine-color-red-8)',
        9: 'var(--mantine-color-red-9)',
      },
      pink: {
        0: 'var(--mantine-color-pink-0)',
        1: 'var(--mantine-color-pink-1)',
        2: 'var(--mantine-color-pink-2)',
        3: 'var(--mantine-color-pink-3)',
        4: 'var(--mantine-color-pink-4)',
        5: 'var(--mantine-color-pink-5)',
        6: 'var(--mantine-color-pink-6)',
        7: 'var(--mantine-color-pink-7)',
        8: 'var(--mantine-color-pink-8)',
        9: 'var(--mantine-color-pink-9)',
      },
      grape: {
        0: 'var(--mantine-color-grape-0)',
        1: 'var(--mantine-color-grape-1)',
        2: 'var(--mantine-color-grape-2)',
        3: 'var(--mantine-color-grape-3)',
        4: 'var(--mantine-color-grape-4)',
        5: 'var(--mantine-color-grape-5)',
        6: 'var(--mantine-color-grape-6)',
        7: 'var(--mantine-color-grape-7)',
        8: 'var(--mantine-color-grape-8)',
        9: 'var(--mantine-color-grape-9)',
      },
      violet: {
        0: 'var(--mantine-color-violet-0)',
        1: 'var(--mantine-color-violet-1)',
        2: 'var(--mantine-color-violet-2)',
        3: 'var(--mantine-color-violet-3)',
        4: 'var(--mantine-color-violet-4)',
        5: 'var(--mantine-color-violet-5)',
        6: 'var(--mantine-color-violet-6)',
        7: 'var(--mantine-color-violet-7)',
        8: 'var(--mantine-color-violet-8)',
        9: 'var(--mantine-color-violet-9)',
      },
      indigo: {
        0: 'var(--mantine-color-indigo-0)',
        1: 'var(--mantine-color-indigo-1)',
        2: 'var(--mantine-color-indigo-2)',
        3: 'var(--mantine-color-indigo-3)',
        4: 'var(--mantine-color-indigo-4)',
        5: 'var(--mantine-color-indigo-5)',
        6: 'var(--mantine-color-indigo-6)',
        7: 'var(--mantine-color-indigo-7)',
        8: 'var(--mantine-color-indigo-8)',
        9: 'var(--mantine-color-indigo-9)',
      },
      blue: {
        0: 'var(--mantine-color-blue-0)',
        1: 'var(--mantine-color-blue-1)',
        2: 'var(--mantine-color-blue-2)',
        3: 'var(--mantine-color-blue-3)',
        4: 'var(--mantine-color-blue-4)',
        5: 'var(--mantine-color-blue-5)',
        6: 'var(--mantine-color-blue-6)',
        7: 'var(--mantine-color-blue-7)',
        8: 'var(--mantine-color-blue-8)',
        9: 'var(--mantine-color-blue-9)',
      },
      cyan: {
        0: 'var(--mantine-color-cyan-0)',
        1: 'var(--mantine-color-cyan-1)',
        2: 'var(--mantine-color-cyan-2)',
        3: 'var(--mantine-color-cyan-3)',
        4: 'var(--mantine-color-cyan-4)',
        5: 'var(--mantine-color-cyan-5)',
        6: 'var(--mantine-color-cyan-6)',
        7: 'var(--mantine-color-cyan-7)',
        8: 'var(--mantine-color-cyan-8)',
        9: 'var(--mantine-color-cyan-9)',
      },
      teal: {
        0: 'var(--mantine-color-teal-0)',
        1: 'var(--mantine-color-teal-1)',
        2: 'var(--mantine-color-teal-2)',
        3: 'var(--mantine-color-teal-3)',
        4: 'var(--mantine-color-teal-4)',
        5: 'var(--mantine-color-teal-5)',
        6: 'var(--mantine-color-teal-6)',
        7: 'var(--mantine-color-teal-7)',
        8: 'var(--mantine-color-teal-8)',
        9: 'var(--mantine-color-teal-9)',
      },
      green: {
        0: 'var(--mantine-color-green-0)',
        1: 'var(--mantine-color-green-1)',
        2: 'var(--mantine-color-green-2)',
        3: 'var(--mantine-color-green-3)',
        4: 'var(--mantine-color-green-4)',
        5: 'var(--mantine-color-green-5)',
        6: 'var(--mantine-color-green-6)',
        7: 'var(--mantine-color-green-7)',
        8: 'var(--mantine-color-green-8)',
        9: 'var(--mantine-color-green-9)',
      },
      lime: {
        0: 'var(--mantine-color-lime-0)',
        1: 'var(--mantine-color-lime-1)',
        2: 'var(--mantine-color-lime-2)',
        3: 'var(--mantine-color-lime-3)',
        4: 'var(--mantine-color-lime-4)',
        5: 'var(--mantine-color-lime-5)',
        6: 'var(--mantine-color-lime-6)',
        7: 'var(--mantine-color-lime-7)',
        8: 'var(--mantine-color-lime-8)',
        9: 'var(--mantine-color-lime-9)',
      },
      yellow: {
        0: 'var(--mantine-color-yellow-0)',
        1: 'var(--mantine-color-yellow-1)',
        2: 'var(--mantine-color-yellow-2)',
        3: 'var(--mantine-color-yellow-3)',
        4: 'var(--mantine-color-yellow-4)',
        5: 'var(--mantine-color-yellow-5)',
        6: 'var(--mantine-color-yellow-6)',
        7: 'var(--mantine-color-yellow-7)',
        8: 'var(--mantine-color-yellow-8)',
        9: 'var(--mantine-color-yellow-9)',
      },
      orange: {
        0: 'var(--mantine-color-orange-0)',
        1: 'var(--mantine-color-orange-1)',
        2: 'var(--mantine-color-orange-2)',
        3: 'var(--mantine-color-orange-3)',
        4: 'var(--mantine-color-orange-4)',
        5: 'var(--mantine-color-orange-5)',
        6: 'var(--mantine-color-orange-6)',
        7: 'var(--mantine-color-orange-7)',
        8: 'var(--mantine-color-orange-8)',
        9: 'var(--mantine-color-orange-9)',
      },
    },
    extend: {
      borderColor: { DEFAULT: 'var(--mantine-color-default-border)' },
      borderRadius: {
        xs: 'var(--mantine-radius-xs)',
        sm: 'var(--mantine-radius-sm)',
        md: 'var(--mantine-radius-md)',
        lg: 'var(--mantine-radius-lg)',
        xl: 'var(--mantine-radius-xl)',
      },
      fontSize: {
        xs: ['var(--mantine-font-size-xs)', { lineHeight: 'var(--mantine-line-height-xs)' }],
        sm: ['var(--mantine-font-size-sm)', { lineHeight: 'var(--mantine-line-height-sm)' }],
        md: ['var(--mantine-font-size-md)', { lineHeight: 'var(--mantine-line-height-md)' }],
        lg: ['var(--mantine-font-size-lg)', { lineHeight: 'var(--mantine-line-height-lg)' }],
        xl: ['var(--mantine-font-size-xl)', { lineHeight: 'var(--mantine-line-height-xl)' }],
      },
      spacing: {
        xs: 'var(--mantine-spacing-xs)',
        sm: 'var(--mantine-spacing-sm)',
        md: 'var(--mantine-spacing-md)',
        lg: 'var(--mantine-spacing-lg)',
        xl: 'var(--mantine-spacing-xl)',
      },
      boxShadow: {
        xs: 'var(--mantine-shadow-xm)',
        sm: 'var(--mantine-shadow-sm)',
        DEFAULT: 'var(--mantine-shadow-md)',
        md: 'var(--mantine-shadow-md)',
        lg: 'var(--mantine-shadow-lg)',
        xl: 'var(--mantine-shadow-xl)',
      },
    },
  },
  important: true,
  plugins: [],
} satisfies Config;
