import { createApp } from 'vue'
import App from './App.vue'

import naive from 'naive-ui'
import './assets/css/tailwindmain.css'

import { setupAssets, setupScrollbarStyle } from './plugins'
import { setupRouter } from './router'
import { setupStore } from "./store"

async function bootstrap() {
  const app = createApp(App)
  setupAssets()

  setupScrollbarStyle()
  setupStore(app)
  await setupRouter(app)
  app.use(naive)
  app.mount('#app')
}

bootstrap()

