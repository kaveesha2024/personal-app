<?php

namespace Tests\Feature\Course;

use App\Models\Course;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

final class CreateNewCourse extends TestCase
{
    use RefreshDatabase;

    public function test_create_new_course(): void
    {
        $user = User::factory()->create();
        $course = Course::factory()->create();
        Sanctum::actingAs($user, ['create-courses']);

        $response = $this->postJson('/api/course/create_new', [
            'course_name' => $course['course_name'],
            'description' => $course['description'],
        ]);

        $response->assertStatus(200);
        dd($response->json());
    }
}
