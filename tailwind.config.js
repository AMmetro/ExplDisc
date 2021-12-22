const {theme} = require('tailwindcss/defaultConfig')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx'],
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({addUtilities}) {
      addUtilities({
        '.scrollbar-none': {
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    }),
  ],
  mode: 'jit',
  darkMode: false,
  theme: {
    screens: {
      // Mobile Landscape
      sm: '480px',
      // Tablet
      md: '720px',
      // Desktop Small
      lg: '960px',
      // Desktop Large
      xl: '1140px',
    },
    fontSize: {
      12: '0.75rem',
      13: '0.813rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      30: '1.875rem',
      32: '2rem',
      34: '2.125rem',
      36: '2.25rem',
      44: '2.75rem',
      54: '3.375rem',
      64: '4rem',
    },
    extend: {
      fontFamily: {
        heading: ['Halcyon', ...theme.fontFamily.sans],
        body: ['Gordita', ...theme.fontFamily.sans],
      },
      colors: {
        apple: '#22a437',
        'apple-background': 'rgba(34, 164, 55, 0.07)',
        beet: '#b2315d',
        'beet-background': 'rgba(178, 49, 93, 0.6)',
        black: '#000000',
        celebrate: 'rgba(34, 164, 55, 0.6)',
        emerald: '#274a47',
        error: '#e70e02',
        'grey-1': '#414848',
        'grey-2': '#7c8181',
        'grey-3': '#9fa5a5',
        'grey-4': '#cfd2d2',
        'grey-5': '#eceded',
        'grey-6': '#f7f8f8',
        'light-peach': '#ffcbbd',
        mango: '#f26350',
        'mango-background': '#fce0dc',
        orange: '#ff6f00',
        'orange-50': 'rgba(255, 111, 0, 0.5)',
        'orange-100': 'rgba(242, 99, 80, 0.07)',
        'orange-background': '#fff5ed',
        'orange-background-hover': '#ffe2da',
        'orange-hover': '#f26300',
        'peach-light': '#ffefea',
        pineapple: '#ffcd00',
        'pineapple-background': '#fffcf5',
        plum: '#7e3075',
        'plum-light': '#f2e5e9',
        white: '#ffffff',
      },
      boxShadow: {
        menu: '0 5px 10px 0 rgba(0, 0, 0, 0.04)',
        dropdown: '0 25px 30px -10px rgba(0, 0, 0, 0.15)',
        tile: '0 25px 30px -10px rgba(91, 97, 97, 0.3)',
        'tile-hover': '0 25px 30px -10px rgba(91, 97, 97, 0.3)',
        tooltip: '0 25px 30px -10px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-right': 'env(safe-area-inset-right)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
      },
    },
  },
  variants: {},
}
