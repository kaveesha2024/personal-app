<?php

namespace App\Http\actions\auth;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class LoginAction
{
    public function __invoke($request): array
    {
        [$email, $password] = [$request['email'], $request['password']];
        try {
            $user = User::where('email', $email)->first();
            if ($user->is_blocked){
                return [
                    'status' => false,
                    'errors' => "User is blocked",
                ];
            }
            if (!$this->isPasswordCorrect($password, $user->password)){
                return [
                    'status' => false,
                    'errors' => [
                        'password' => ['Invalid Password'],
                    ],
                ];
            }
            $accessToken = $user->createToken('auth_token', ['server:user'])->plainTextToken;
            return [
                'status' => true,
                'access_token' => $accessToken,
                'message' => 'User logged in successfully'
            ];
        }catch (\Exception $e) {
            Log::error($e->getMessage());
            return [
                'status' => false,
                'errors' => "Internal server error",
            ];
        }
    }
    public function isPasswordCorrect(string $requestPassword,string $userPassword): bool
    {
        return Hash::check($requestPassword, $userPassword);
    }
}
