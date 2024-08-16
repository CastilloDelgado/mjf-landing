import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from './router';
import { addIcons, OhVueIcon } from 'oh-vue-icons';
import * as FaIcons from "oh-vue-icons/icons/fa";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount('#app');
