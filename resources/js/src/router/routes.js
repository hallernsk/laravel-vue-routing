import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import SomePage from "../pages/SomePage.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/some-page',
        component: SomePage
    }
]

export default routes;