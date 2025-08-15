<template>
    <div>
        <h1>Products</h1>
        <br><br>

        <Link href="/products/create" class="create-btn">Create Product</Link>
        <br><br>

        <ul>
            <li v-for="p in products" :key="p.id">
                {{ p.name }} - {{ p.price }} ₽&nbsp;&nbsp;
                <Link :href="`/products/${p.id}`">View</Link>&nbsp;&nbsp;
                <Link :href="`/products/${p.id}/edit`">Edit</Link>&nbsp;&nbsp;
                <Link
                    :href="`/products/${p.id}`"
                    method="delete"
                    as="button"
                    class="delete-btn"
                    onclick="return confirm('Delete product?')"
                >
                    Delete
                </Link>
                <br><br>
            </li>
        </ul>
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'

export default {
    props: {
        products: Array
    },
    components: { Link }
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