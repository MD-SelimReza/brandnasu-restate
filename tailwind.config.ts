import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s steps(1) infinite',
        'gradient-move': 'gradientMove 4s linear infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      colors: {
        darkIndigo: '#2E1C6A',
        indigo: '#673DDB',
        muteIndigo: '#AFA5FF',
        lightIndigo: '#E0D9FF',
        indigo100: '#F4F3FF',
        darkGray: '#4B5151',
        lightGray: '#EEF0F2',
        gray100: '#F7F7F7',
        gray300: '#D1D5DB',
        gray400: '#9CA3AF',
        gray600: '#4B5563',
        white: '#FFFFFF',
        black: '#000000',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      textColor: {
        darkIndigo: '#2E1C6A',
        indigo: '#673DDB',
        lightIndigo: '#E0D9FF',
        primary: '#4F46E5',
        secondary: '#EC4899',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        36: '9rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0, 0, 0, 0.1)',
        strong: '0 4px 20px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }),
  ],
} satisfies Config;
