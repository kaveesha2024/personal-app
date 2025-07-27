<?php

namespace App\Http\Controllers;

use App\Http\actions\auth\RegisterAction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function register(Request $request, RegisterAction $RegisterAction): JsonResponse
    {
        return response()->json($RegisterAction($request));
    }

    public function login(Request $request)
    {

    }

    public function logout(Request $request)
    {

    }
}
