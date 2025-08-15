<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/{any}', function () {
//     return view('app'); // "входной" шаблон (app.blade.php)
// })->where('any', '.*');

// Для работы с Inertia
// Главная страница
Route::get('/', function () {
    // dd('home');
    return Inertia::render('Home');
})->name('home');

// Продукты — ресурсный контроллер
Route::resource('products', ProductController::class);
