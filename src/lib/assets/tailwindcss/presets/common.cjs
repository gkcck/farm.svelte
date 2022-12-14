const defaultTheme = require('tailwindcss/defaultTheme');
//const colors = require('tailwindcss/colors');

const plugin = require('tailwindcss/plugin');

const disabled = plugin(function ({ addVariant }) {
  addVariant('disabled', ['&.disabled', '&[disabled]']);
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  theme: {
    screens: {
      '2xs': '320px',
      xs: '480px',
      ...defaultTheme.screens
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
        xl: '2rem'
      }
    },
    extend: {
      fontSize: {
        '2.5xl': '1.6875rem',
        '3.5xl': '2rem',
        '4.5xl': '2.5rem'
      },
      backgroundSize: {
        '1/20': '5%',
        '1/10': '10%',
        '1/5': '20%',
        '1/4': '25%',
        '1/3': '33.333333%',
        '1/2': '50%'
      },
      backgroundPosition: {
        'center-top': 'center top'
      },
      spacing: {
        inherit: 'inherit',
        '1/7': '14.285714%',
        '1/8': '12.5%',
        '1/9': '11.111111%',
        '1/10': '10%',
        '1/11': '9.090909%'
      },
      maxWidth: {
        inherit: 'inherit',
        none: 'none'
      },
      minWidth: {
        inherit: 'inherit',
        none: 'none'
      },
      maxHeight: {
        inherit: 'inherit',
        none: 'none'
      },
      minHeight: {
        inherit: 'inherit',
        none: 'none'
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/3': '4 / 3',
        A4: '620 / 877',
        A4l: '877 / 620'
      },
      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms',
        3000: '3000ms',
        5000: '5000ms'
      },
      content: {
        null: '""'
      }
    }
  },

  /*variants: {
    extend: {
      textColor: ['disabled'],
      backgroundColor: ['disabled'],
      borderColor: ['disabled']
    }
  },*/

  plugins: [
    disabled,
    require('../plugins/animation-play-state.cjs'),
    require('../plugins/svg/stroke-linecap.cjs'),
    require('../plugins/svg/stroke-linejoin.cjs'),
    require('../plugins/svg/vector-effect.cjs')
  ]
};
