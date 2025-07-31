<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\LessonController;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Middleware\CheckAbilities;


Route::middleware(['auth:sanctum', CheckAbilities::class . ":server-admin"])->group(function () {
    Route::post("/course/create_new", [CourseController::class, "createNewCourse"]);
    Route::get("/courses", [CourseController::class, "getAllCourses"]);
    Route::post("/lesson/create_new", [LessonController::class, "createNewLesson"]);
});

