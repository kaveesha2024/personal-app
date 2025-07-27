<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

final class RegisterUserTest extends TestCase
{
    use RefreshDatabase;
    public function test_user_registration(): void
    {
        $user = User::factory()->make([])->toArray();
        $response = $this->post('/api/register', [
            'firstName' => $user['first_name'],
            'lastName' => $user['last_name'],
            'email' => $user['email'],
            'password' => '12345678',
        ]);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
            'access_token',
        ]);
        $this->assertDatabaseHas('users', [
            'email' => $user['email'],
            'first_name' => $user['first_name'],
            'last_name' => $user['last_name'],
            'email_verified_at' => null,
        ]);
    }
    public function test_request_validations(): void
    {
        $response = $this->post('/api/register', [
            'firstName' => 'k',
            'lastName' => 123,
            'email' => 'test',
            'password' => '1234',
        ]);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
        ]);
        $response->assertSimilarJson([
            'status' => false,
            'message' => [
                'firstName' => ["The first name field must be at least 3 characters."],
                'lastName' => ["The last name field must be a string."],
                'email' => ["The email field must be a valid email address."],
                'password' => ["The password field must be at least 8 characters."],
            ],
        ]);
    }

    public function test_duplicate_email_registration_error_handling(): void
    {
        $user = User::factory()->create([])->toArray();
        $response = $this->post('/api/register', [
            'firstName' => $user['first_name'],
            'lastName' => $user['last_name'],
            'email' => $user['email'],
            'password' => '12345678',
        ]);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
        ]);
        $response->assertSimilarJson([
            'status' => false,
            'message' => [
                'email' => ["The email has already been taken."],
            ]
        ]);
    }
}
