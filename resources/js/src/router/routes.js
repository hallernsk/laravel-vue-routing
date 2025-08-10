import Home from "../pages/Home.vue";
import ProductList from '../pages/ProductList.vue';
import ProductCreate from '../pages/ProductCreate.vue';
import ProductEdit from '../pages/ProductEdit.vue';
import ProductShow from '../pages/ProductShow.vue';

const routes = [
    {
        path: '/',
        component: Home // это статическая загрузка компонента (сразу при первой загрузке)
    },
    { path: '/products', component: ProductList },
    { path: '/products/create', component: ProductCreate },
    { path: '/products/:id', component: ProductShow, props: true },
    { path: '/products/:id/edit', component: ProductEdit, props: true },
]

export default routes;