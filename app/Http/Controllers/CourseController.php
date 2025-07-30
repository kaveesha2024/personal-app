<?php

namespace App\Http\Controllers;

use App\Http\actions\courses\CreateNewCourseAction;
use App\Http\Requests\course\CreateCourseRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function createNewCourse(CreateCourseRequest $request, CreateNewCourseAction $CreateNewCourseAction): JsonResponse
    {
        return response()->json($CreateNewCourseAction($request));
    }
}
