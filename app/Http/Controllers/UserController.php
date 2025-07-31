<?php

namespace App\Http\Controllers;

use App\Http\actions\auth\GetUserAction;
use App\Http\actions\auth\LoginAction;
use App\Http\actions\auth\RegisterAction;
use App\Http\Requests\auth\LoginRequest;
use App\Http\Requests\auth\RegisterRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function register(RegisterRequest $request, RegisterAction $RegisterAction): JsonResponse
    {
        $validated = $request->validated();
        return response()->json($RegisterAction($validated));
    }

    public function login(LoginRequest $request, LoginAction $LoginAction): JsonResponse
    {
        $validated = $request->validated();
        return response()->json($LoginAction($validated));
    }

    public function getUser(GetUserAction $GetUserAction): JsonResponse
    {
        return response()->json($GetUserAction());
    }

    public function logout(Request $request)
    {

    }
}
