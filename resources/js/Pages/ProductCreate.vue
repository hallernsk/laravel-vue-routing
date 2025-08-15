<template>
    <div>
        <h1>Create Product</h1>
        <form @submit.prevent="createProduct">
            <input v-model="form.name" placeholder="Name" required />
            <input v-model="form.price" placeholder="Price" type="number" required />
            <textarea v-model="form.description" placeholder="Description"></textarea>
            <button type="submit" class="create-btn">Save</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: { name: '', price: '', description: '' }
        }
    },
    methods: {
        createProduct() {
            axios.post('/api/products', this.form).then(() => {
                this.$router.push('/products');
            });
        }
    }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
input, textarea {
  width: 100%;
  padding: 8px;
}
button {
  margin-top: 10px;
  padding: 8px 12px;
  cursor: pointer;
}
.create-btn {
  background-color: green;
  color: white;
}

</style>