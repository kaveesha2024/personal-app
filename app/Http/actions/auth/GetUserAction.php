<?php

namespace App\Http\actions\auth;

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
        return [
            'status' => true,
            'message' => $user,
        ];
    }
}
