<?php

namespace App\Http\Controllers;

use App\Http\actions\auth\LoginAction;
use App\Http\actions\auth\RegisterAction;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function register(RegisterRequest $request, RegisterAction $RegisterAction): JsonResponse
    {
        $validated = $request->validated();
        return response()->json($RegisterAction($validated));
    }

    public function login(Request $request, LoginAction $LoginAction): JsonResponse
    {
        return response()->json($LoginAction($request));
    }

    public function logout(Request $request)
    {

    }
}
