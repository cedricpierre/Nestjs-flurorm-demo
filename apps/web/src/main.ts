import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'   
import './main.css'

import { FluORM } from 'fluorm'

FluORM.configure({
    baseUrl: 'http://localhost:3000',
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app') 