<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create(['name' => 'Товар 1', 'description' => 'Описание товара 1', 'price' => 100]);
        Product::create(['name' => 'Товар 2', 'description' => 'Описание товара 2', 'price' => 200]);
        Product::create(['name' => 'Товар 3', 'description' => 'Описание товара 3', 'price' => 300]);
    }
}
