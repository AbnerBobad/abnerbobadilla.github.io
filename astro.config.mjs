// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://abnerbobadilla.github.io/student_info_form/',
  base: '/student_info_form/',
  outDir: './dist',
});