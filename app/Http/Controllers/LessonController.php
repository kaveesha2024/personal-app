<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class LessonController extends Controller
{
    public function createNewLesson(Request $request)
    {
//        $video = $request->file('video')->store('lessons', 'public');
//        $path = Storage::url($video);
//        $videoUrl = env("APP_URL") . ':8000' . $path;
//        Log::info($videoUrl);
        Log::info($request->all());
        if ($request->hasFile('video')){
            Log::info($request->file('video'));
        }
    }
}
