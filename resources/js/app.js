import './bootstrap';
import {createPinia} from 'pinia';
import router from './router';
import {createApp} from 'vue'
import App from './App.vue'
import {useStoreVuex} from "./StoreVuex/modules/PersonVuex.js";


const app = createApp(App)

app.use(createPinia()).use(router).use(useStoreVuex).mount('#app')
