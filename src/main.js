import { createApp } from 'vue';
import tooltip from './directives/tooltip';
import App from './App.vue';
import './index.css';

app.directive('tooltip', tooltip);

createApp(App).mount('#app');
