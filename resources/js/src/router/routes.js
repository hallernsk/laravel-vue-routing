import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import Products from "../pages/Products.vue";

const routes = [
    {
        path: '/',
        component: Home // это статическая загрузка компонента (сразу при первой загрузке)
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/products',
        component: Products
    }
]

export default routes;