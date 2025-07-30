<?php

namespace App\Http\actions\courses;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GetAllCoursesAction
{
    public function __invoke(): array
    {
        try {
            $courses = DB::table('courses')->select([
                'course_name',
                'description',
                'logo',
                'created_at',
            ])->get();

            return [
                'status' => true,
                'message' => $courses,
            ];

        } catch (\Exception $e) {
            Log::info($e->getMessage());
            return [
                'status' => false,
                'errors' => [
                    'Offline' => ['Please check your internet connection']
                ]
            ];
        }
    }
}
