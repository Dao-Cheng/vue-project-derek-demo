import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProjectButton from './components/ProjectButton.vue';
// createApp(App).use(router).mount('#app')

const app = createApp(App);
app.use(router);
app.component('ProjectButton', ProjectButton);
app.mount('#app');