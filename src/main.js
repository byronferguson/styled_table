import { createApp } from 'vue';
import tooltip from './directives/tooltip';
import App from './App.vue';
import './index.css';
import './assets/tooltip.css';

const app = createApp(App);

app.directive('tooltip', tooltip);
app.mount('#app');
