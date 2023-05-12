<?php

use App\Models\Category;
use App\Models\Brand;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('friendly_URL')->unique();
            $table->text('description');
            $table->text('summary');
            $table->tinyInteger('stock')->unsigned();
            $table->double('price');
            $table->double('discounted_price');
            $table->text('images');
            $table->foreignIdFor(Category::class)->constrained();
            $table->foreignIdFor(Brand::class)->constrained();
            $table->enum('status', ['aktivní', 'neaktivní'])->default('aktivní');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
