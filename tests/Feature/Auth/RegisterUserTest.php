<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
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
        $user = User::factory()->make([])->toArray();
        $response = $this->post('/api/register', [
            'firstName' => $user['first_name'],
            'lastName' => $user['last_name'],
            'email' => $user['email'],
            'password' => '12345678',
        ]);

        $response->assertStatus(200);
        dd($response->json());
    }
}
