<template>
    <div>
        <h1>Edit Product</h1>
        <form @submit.prevent="updateProduct">
            <input v-model="form.name" placeholder="Name" required />
            <input v-model="form.price" placeholder="Price" type="number" required />
            <textarea v-model="form.description" placeholder="Description"></textarea>
            <button type="submit" class="save-btn">Update</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data() {
        return { form: { name: '', price: '', description: '' } }
    },
    mounted() {
        axios.get(`/api/products/${this.id}`).then(res => {
            this.form = res.data;
        });
    },
    methods: {
        updateProduct() {
            axios.put(`/api/products/${this.id}`, this.form).then(() => {
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
  .save-btn {
    background-color: blue;
    color: white;
  }
  </style>