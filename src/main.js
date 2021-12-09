import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/normalize.css';
import '@/assets/css/common.css';
import '@/assets/css/main.css';
import '@/assets/css/portfolio.css';
import router from '@/routes/router.js';
// import VueCarousel from 'vue3-carousel';

createApp(App).use(router).mount('#app')
