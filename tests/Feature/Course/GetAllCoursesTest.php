<?php

namespace Tests\Feature\Course;

use App\Models\Course;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

final class GetAllCoursesTest extends TestCase
{
    use RefreshDatabase;

    public function test_get_all_the_courses(): void
    {
        Course::factory()->create()->toArray();
        Course::factory()->create()->toArray();

        $user = User::factory()->create();
        Sanctum::actingAs($user, ['server-admin']);

        $response = $this->get('/api/courses');
        $response->assertStatus(200);

        $response->assertJsonStructure([
            'status',
            'message',
        ]);

    }
}
