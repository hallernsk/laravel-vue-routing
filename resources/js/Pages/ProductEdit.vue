<script setup>
import { useForm, Link } from '@inertiajs/vue3'

// Получаем продукт из props, который передаёт контроллер Inertia
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

// Создаём форму и заполняем её начальными данными
const form = useForm({
    name: props.product.name || '',
    price: props.product.price || '',
    description: props.product.description || ''
})

// Отправляем обновление
const updateProduct = () => {
    form.put(`/products/${props.product.id}`)
}
</script>

<template>
    <div style="padding: 20px; font-family: sans-serif;">
        <h1 style="margin-bottom: 10px;">Редактировать товар</h1>

        <form @submit.prevent="updateProduct" style="display: flex; flex-direction: column; gap: 10px; max-width: 300px;">
            <input v-model="form.name" placeholder="Название" required />
            <input v-model="form.price" placeholder="Цена" type="number" required />
            <textarea v-model="form.description" placeholder="Описание"></textarea>

            <button type="submit" :disabled="form.processing" style="background: #38c172; color: white; padding: 8px 15px; border-radius: 5px;">
                {{ form.processing ? 'Сохраняем...' : 'Обновить' }}
            </button>
        </form>

        <div style="margin-top: 15px;">
            <Link href="/products" style="color: #3490dc; text-decoration: none;">← Назад к списку</Link>
        </div>
    </div>
</template>


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