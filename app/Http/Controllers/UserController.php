<?php

namespace App\Http\Controllers;

use App\Http\actions\auth\RegisterAction;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function register(RegisterRequest $request, RegisterAction $RegisterAction): JsonResponse
    {
        $validated = $request->validated();
        return response()->json($RegisterAction($validated));
    }

    public function login(Request $request)
    {

    }

    public function logout(Request $request)
    {

    }
}
