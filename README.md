## Laravel + Vue 3 (SPA/Vue Routing)

Приложение на Laravel и Vue с маршрутизацией через Vue Router.  
Проект запускается в Docker с использованием Laravel Sail.

### Установка и запуск

git clone git@github.com:hallernsk/laravel-vue-routing.git   
cd laravel-vue-routing

composer install

cp .env.example .env  
php artisan key:generate

./vendor/bin/sail up -d

./vendor/bin/sail npm install  
./vendor/bin/sail npm run dev

### Доступ к приложению

    http://localhost:8000


./vendor/bin/sail down *(остановка приложения)*
