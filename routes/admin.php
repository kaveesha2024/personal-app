<?php

use App\Http\Controllers\CourseController;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Middleware\CheckAbilities;


Route::middleware(['auth:sanctum', CheckAbilities::class . ":create-courses"])->group(function () {
    Route::post("/course/create_new", [CourseController::class, "createNewCourse"]);
});

