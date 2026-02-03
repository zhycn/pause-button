// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    locales: ['en', 'zh-CN'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false // 默认语言不使用前缀
    }
  }
});