import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/assets/css/main.css'
import VueApexCharts from "vue3-apexcharts";

createApp(App).use(router).use(VueApexCharts).mount('#app')
