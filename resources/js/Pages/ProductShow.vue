<template>
    <div>
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }} ₽</p>
        <router-link to="/products">Back</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data() {
        return { product: {} }
    },
    mounted() {
        axios.get(`/api/products/${this.id}`).then(res => {
            this.product = res.data;
        });
    }
}
</script>
