import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProjectButton from './components/ProjectButton.vue';
// createApp(App).use(router).mount('#app')


const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.component('ProjectButton', ProjectButton);
app.mount('#app');