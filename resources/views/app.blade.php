<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel-Vite-Vue3</title>
    @vite('resources/js/app.js')
</head>
<body>
    <p> Текст из resources/views/app.blade.php (шаблон Blade)</p>
    <p> Ниже все из resources/js/src/App.vue (основной компонент Vue, подключенный к шаблону: div id="app" ... )</p>
    <div id="app" class="container"></div>
</body>
</html>