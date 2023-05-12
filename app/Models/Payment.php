<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'price ',
        'shipping_id'
    ];
    public function shippings(){
        return $this->hasMany(Shipping::class);
    }
}
