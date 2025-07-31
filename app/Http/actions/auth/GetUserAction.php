<?php

namespace App\Http\actions\auth;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GetUserAction
{
    public function __invoke(): array
    {
        $user = auth()->user();
        if (!$user) {
            return [
                'status' => false,
                'errors' => [
                    "Unauthorized" => ['Please login first.']
                ]
            ];
        }
        $validUser = DB::table('users')->where('id', $user['id'])->select([
            'id',
            'first_name',
            'last_name',
            'email',
            'is_blocked',
            'created_at',
            'updated_at',
        ])->first();

        if (!$validUser) {
            return [
                'status' => false,
                'errors' => [
                    "Unauthorized" => ['Please login first.']
                ]
            ];
        }
        return [
            'status' => true,
            'message' => $validUser,
        ];
    }
}
