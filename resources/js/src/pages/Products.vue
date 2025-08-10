<template>
  <div>
    <h2>Список товаров</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} — {{ product.description }} - {{ product.price }} ₽
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Products',
  data() {
    return {
      products: []
    };
  },
  mounted() {
    axios.get('/api/products')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error('Ошибка при загрузке товаров:', error);
      });
  }
};
</script>
