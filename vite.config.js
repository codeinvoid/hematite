import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { presetScalpel } from 'unocss-preset-scalpel'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetTagify from '@unocss/preset-tagify'
import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import { presetTypography } from 'unocss'
import UnheadVite from '@unhead/addons/vite'

export default defineConfig({
  plugins: [
    vue(),
    UnheadVite(),
    Components(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetTagify(),
        presetTypography(),
        presetScalpel(),
        presetHeroPatterns(),
        presetScrollbar(),
      ],
    }),
  ]
})
