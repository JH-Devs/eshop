<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'friendly_URL',
        'description',
        'summary',
        'stock',
        'price',
        'discounted_price',
        'images',
        'images2',
        'images3',
        'images4',
        'category_id',
        'brand_id',
        'status'
    ];
    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function brand(){
        return $this->belongsTo(Brand::class);
    }
    public function reviews(){
        return $this->hasMany(Review::class);
    }
}
