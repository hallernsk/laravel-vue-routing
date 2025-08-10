<template>
    <div>
        <h1>Products</h1>
        <br><br>
        <router-link to="/products/create" class="create-btn">Create Product</router-link>
        <br><br>
        <ul>
            <li v-for="p in products" :key="p.id">
                {{ p.name }} - {{ p.price }} ₽&nbsp;&nbsp;
                <router-link :to="`/products/${p.id}`">View   </router-link>&nbsp;&nbsp;
                <router-link :to="`/products/${p.id}/edit`">  Edit   </router-link>&nbsp;&nbsp;
                <button @click="deleteProduct(p.id)" class="delete-btn">Delete</button>
                <br><br>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return { products: [] }
    },
    mounted() {
        axios.get('/api/products').then(res => {
            this.products = res.data;
        });
    },
    methods: {
        deleteProduct(id) {
            if (confirm('Delete product?')) {
                axios.delete(`/api/products/${id}`).then(() => {
                    this.products = this.products.filter(p => p.id !== id);
                });
            }
        }
    }
}
</script>

<style scoped>
.create-btn, .delete-btn {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}
.delete-btn {
  background-color: red;
  color: white;
}
.create-btn {
  /* display: block; */
  margin-top: 20px;
  background-color: green;
  color: white;
  text-align: center;
  text-decoration: none;
  padding: 8px 12px;
}
</style>