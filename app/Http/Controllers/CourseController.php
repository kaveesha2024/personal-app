<?php

namespace App\Http\Controllers;

use App\Http\actions\courses\CreateNewCourseAction;
use App\Http\actions\courses\GetAllCoursesAction;
use App\Http\Requests\course\CreateCourseRequest;
use Illuminate\Http\JsonResponse;

class CourseController extends Controller
{
    public function createNewCourse(CreateCourseRequest $request, CreateNewCourseAction $CreateNewCourseAction): JsonResponse
    {
        return response()->json($CreateNewCourseAction($request));
    }

    public function getAllCourses(GetAllCoursesAction $GetAllCoursesAction): JsonResponse
    {
        return response()->json($GetAllCoursesAction());
    }
}
