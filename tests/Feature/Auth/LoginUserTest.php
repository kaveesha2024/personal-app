<?php

namespace Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

final class LoginUserTest extends TestCase
{
    use RefreshDatabase;
    public function test_user_login()
    {
        $user = User::factory()->create()->toArray();

        $response = $this->post('/api/login', [
            'email' => $user['email'],
            'password' => '12345678',
        ]);
        $response->assertStatus(200);

        $response->assertJsonStructure([
            'status',
            'access_token',
            'message',
        ]);
    }
}
