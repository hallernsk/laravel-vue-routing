<template>
    <div>
        <h1>Product Details</h1>
        <div v-if="product">
            <p><strong>Name:</strong> {{ product.name }}</p>
            <p><strong>Price:</strong> {{ product.price }}</p>
            <p><strong>Description:</strong> {{ product.description }}</p>
        </div>
        <!-- <Link :href="route('products.index')" class="back-btn">Back to list</Link> -->
                     <Link href="/products" style="color: #3490dc; text-decoration: none;">← Назад к списку</Link>
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3';

export default {
    props: {
        product: Object
    },
    components: {
        Link
    }
}
</script>
