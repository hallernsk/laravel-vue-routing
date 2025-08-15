<template>
    <div>
        <h1>Create Product</h1>

        <form @submit.prevent="submit">
            <input v-model="form.name" placeholder="Name" required />
            <input v-model="form.price" placeholder="Price" type="number" required />
            <textarea v-model="form.description" placeholder="Description"></textarea>
            <button type="submit" class="create-btn" :disabled="form.processing">
                Save
            </button>
        </form>
    </div>
</template>

<script>
import { useForm, Link } from '@inertiajs/vue3'

export default {
    setup() {
        const form = useForm({
            name: '',
            price: '',
            description: ''
        })

        function submit() {
            form.post('/products')
        }

        return { form, submit }
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