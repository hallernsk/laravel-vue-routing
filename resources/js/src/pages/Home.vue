<template>
    <div>
        <h1>Home page</h1>
        <br><br>
            <p> resources/views/app.blade.php - основной (и единственный) шаблон Blade.</p>
            <p> В нем подключается resources/js/app.js - точка входа Vue, где создается приложение Vue,</p>
            <p> корневой компонент которого(resources/js/src/App.vue) монтируется в DOM-элемент с id="app" (в app.blade.php),</p>
            <p> а также подключается Vue Router.</p>
    </div>
</template>

<style lang="less" scoped>
</style>