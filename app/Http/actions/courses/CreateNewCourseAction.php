<?php

namespace App\Http\actions\courses;

use App\Models\Course;
use Illuminate\Support\Facades\Storage;

class CreateNewCourseAction
{
    public function __invoke($request): array
    {
        $logo = $request->file('logo')->store('courses', 'public');
        $path = Storage::url($logo);
        $logoUrl = env("APP_URL") . ':8000' . $path;
        try {
            $res = Course::create([
                'course_name' => $request['course_name'],
                'description' => $request['description'],
                'logo' => $logoUrl,
            ]);
            return [
                'status' => true,
                'message' => 'Course created successfully',
                'courseId' => $res->id,
            ];
        } catch (\Exception $e) {
            return [
                'status' => false,
                'message' => $e,
                'errors' => ['Internal server error'],
            ];
        }
    }
}
