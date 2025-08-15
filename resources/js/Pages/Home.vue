<script setup>
import { Link } from '@inertiajs/vue3'
</script>

<template>
    <div style="padding: 20px; font-family: sans-serif;">
        <h1 style="margin-bottom: 10px;">Добро пожаловать!</h1>
        <p style="margin-bottom: 20px;">
            Это главная страница. Вы можете перейти к списку товаров по ссылке ниже.
        </p>
        <Link 
            href="/products" 
            style="padding: 10px 15px; background: #3490dc; color: white; border-radius: 5px; text-decoration: none;"
        >
            Перейти к товарам
        </Link>
    </div>
</template>
