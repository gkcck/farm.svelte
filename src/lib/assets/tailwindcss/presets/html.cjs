const round = (num) => num.toFixed(1).replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {}
  },
  variants: {}
};
