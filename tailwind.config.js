/** @type {import('tailwindcss').Config} */

function withOpacity(variableName){
  return ({ opacityValue }) => {
    if(opacityValue !== undefined){
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  }
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': withOpacity('--background'),
        'foreground': withOpacity('--foreground'),
      }
    },
  },
  plugins: [],
}
