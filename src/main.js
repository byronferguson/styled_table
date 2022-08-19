import { createApp } from 'vue';
import tooltip from './directives/tooltip';
import App from './App.vue';
import './assets/css/tailwind.pcss';
import './assets/css/tooltip.css';

const app = createApp(App);

app.directive('tooltip', tooltip);
app.mount('#app');
