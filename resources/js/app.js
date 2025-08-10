import './bootstrap';
import { createApp } from 'vue';
import App from './src/App.vue';
import router from './src/router/router.js';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App)      // 1
    .use(router)    // 2
    .mount('#app'); // 3

// 1. создаем экземпляр приложения Vue и указываем, что корневым компонентом будет App.vue (c.3)
// 2. подключаем Vue Router к этому приложению 
// 3. монтируем приложение в DOM-элемент с id="app" (в app.blade.php)

