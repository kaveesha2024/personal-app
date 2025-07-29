<?php

namespace App\Http\actions\auth;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class RegisterAction
{
    public function __invoke($request): array
    {
        $alreadyExistingUser = User::where('email', $request['email'])->first();
        if (!$alreadyExistingUser) {
            try {
                User::create([
                    'first_name' => $request['firstName'],
                    'last_name' => $request['lastName'],
                    'email' => $request['email'],
                    'password' => Hash::make($request['password']),
                ]);
                $user = User::where('email', $request['email'])->first();

                $token = $user->createToken('auth_token', ['server:user'])->plainTextToken;

                return [
                    "status" => true,
                    "message" => "User created successfully",
                    "access_token" => $token,
                ];
            } catch (\Exception $e) {
                Log::error($e->getMessage());
                return [
                    "status" => false,
                    "errors" => "Internal server error",
                ];
            }
        }
        return[
            "status" => false,
            "message" => "User already exists",
        ];
    }
}
