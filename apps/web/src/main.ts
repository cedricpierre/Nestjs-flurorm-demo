import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'   
import './main.css'

import { Fluentity } from '@fluentity/core'

    Fluentity.configure({
    baseUrl: 'http://localhost:3000',
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app') 