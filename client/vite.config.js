import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),]
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(), tailwindcss({ 
//     fontSize : {
//       'course-deatils-heading-small' : ['26px', '36px'],
//       'course-deatils-heading-large' : ['36px', '44px'],
//       'home-heading-small' : ['28px', '34px'],
//       'home-heading-large' : ['48px', '56px'],
//       'default' : ['15px', '21px']
//     }
//   })],
// })
