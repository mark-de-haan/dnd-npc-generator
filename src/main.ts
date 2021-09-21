import {createApp} from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Button from "primevue/button";

import router from './router'
import {store} from './store'

const app = createApp(App);

app.use(PrimeVue);
app.component('Button', Button);

app.use(store);
app.use(router);

app.mount('#app');
