<?php

namespace Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

final class GetUserTest extends TestCase
{
    use RefreshDatabase;
    public function test_get_user(): void
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user, ['server-admin']);

        $response = $this->get('/api/get_user');

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
        ]);
        $response->assertSimilarJson([
            'status' => true,
            'message' => $user->toArray(),
        ]);
    }

    public function test_gets_an_unauthorized_warn_if_did_not_log_in(): void
    {
        $user = User::factory()->create();
        $response = $this->get('/api/get_user');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'errors',
        ]);
        $response->assertSimilarJson([
            'status' => false,
            'errors' => [
                "Unauthorized" => ["Please login first."]
            ]
        ]);
    }
}
