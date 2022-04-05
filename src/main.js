import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/assets/css/main.css'
import VueApexCharts from "vue3-apexcharts";
import {db} from '@/firebase'


console.log(db.collection('transaksi').get())
createApp(App).use(router).use(VueApexCharts).mount('#app')
