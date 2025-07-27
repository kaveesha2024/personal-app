<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

//register (firstName, lastName, email, password)
Route::post('/register', [UserController::class, "register"]);
