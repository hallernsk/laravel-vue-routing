import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes
})

export default router;  // экспорт объекта ViewRoter с заданными параметрами (в т.ч. маршрутами)
//                         для использования в других частях приложения