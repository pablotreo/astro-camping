
// tailwind.config.js
import preline from 'preline/plugin.js'
export default {
  content: [
      './public/**/*.astro',  
      './src/**/*.{astro,js,jsx,ts,tsx,vue}',  
      'node_modules/preline/dist/*.js',  
  ],
  plugins: [
      preline,
  ],
}