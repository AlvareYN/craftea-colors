/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5dc',
          400: '#99a1af',
          500: '#6a7282',
          600: '#4a5565',
          700: '#364153',
          800: '#1e2939',
          900: '#101828',
          950: '#030712',
        },
        'electric-violet': {
          50: '#eceeff',
          100: '#dde0ff',
          200: '#c2c6ff',
          300: '#9c9fff',
          400: '#7d75ff',
          500: '#644cff',
          600: '#5f36f5',
          700: '#522ad8',
          800: '#4225ae',
          900: '#382689',
          950: '#231650',
        },
        white: '#ffffff',
        dark: '#030712',
      },
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundColor: {
        main: '#ffffff',
      },
    },
  },

  plugins: [require("@tailwindcss/typography")]
};
