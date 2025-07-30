<?php

namespace Tests\Feature\Course;

use App\Models\Course;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

final class CreateNewCourse extends TestCase
{
    use RefreshDatabase;

    public function test_request_validators(): void
    {
        $user = User::factory()->create();
        $course = Course::factory()->create();
        Sanctum::actingAs($user, ['create-courses']);

        $response = $this->postJson('/api/course/create_new', [
            'course_name' => $course['course_name'],
            'description' => $course['description'],
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
           "status",
            'errors',
        ]);
        $response->assertSimilarJson([
            'status' => false,
            'errors' => [
                'course_name' => ["The course name has already been taken."],
                "logo" => ["The logo field is required."],
            ]
        ]);
    }
}
