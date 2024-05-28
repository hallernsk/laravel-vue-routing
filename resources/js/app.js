import './bootstrap';
import { createApp } from 'vue';
import App from './src/App.vue';
import router from './src/router/router.js';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App)
    .use(router)
    .mount('#app');

// создаем экземпляр приложения Vue, он монтируется к элементу с идентификатором #app в HTML файле (в нашем случае это шаблон blade).
