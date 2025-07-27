<?php

namespace Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

final class LoginUserTest extends TestCase
{
    use RefreshDatabase;
    public function test_user_login(): void
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
    public function test_request_validations(): void
    {
        $response = $this->post('/api/login', [
            'email' => 'test',
            'password' => 123,
        ]);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'errors',
        ]);
        $response->assertSimilarJson([
            'status' => false,
            'errors' => [
                'email' => ["The email field must be a valid email address."],
                'password' => ["The password field must be a string.", "The password field must be at least 8 characters."],
            ]
        ]);
    }

    public function test_invalid_password(): void
    {
        $user = User::factory()->create()->toArray();
        $response = $this->post('/api/login', [
            'email' => $user['email'],
            'password' => '123456789',
        ]);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'errors',
        ]);
        $response->assertSimilarJson([
            'status' => false,
            'errors' => [
                'password' => ["Invalid Password"],
            ]
        ]);
    }
    public function test_invalid_email_address(): void
    {
        $user = User::factory()->create()->toArray();
        $response = $this->post('/api/login', [
            'email' => 'test@test.com',
            'password' => '123456789',
        ]);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'errors',
        ]);
        $response->assertSimilarJson([
            'status' => false,
            'errors' => [
                'email' => ["The selected email is invalid."],
            ]
        ]);
    }
}
