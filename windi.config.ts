import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'cover',
      '50%': '50%',
      '10%': '10%',
      16: '4rem'
    }
  },
})
