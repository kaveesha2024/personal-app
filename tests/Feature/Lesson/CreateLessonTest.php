<?php

namespace Tests\Feature\Lesson;

use App\Models\Course;
use App\Models\Lesson;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

final class CreateLessonTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_create_new_lesson(): void
    {
        $user = User::factory()->create();
        $course = Course::factory()->create()->toArray();
        $lesson = Lesson::factory()->make([
            'course_id' => $course['id'],
        ])->toArray();
        Sanctum::actingAs($user, ['server-admin']);
        $response = $this->post('/api/lesson/create_new', [$lesson]);
        $response->assertStatus(200);
    }
}
