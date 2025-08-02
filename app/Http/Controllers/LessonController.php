<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Pion\Laravel\ChunkUpload\Exceptions\UploadFailedException;
use Pion\Laravel\ChunkUpload\Receiver\FileReceiver;
use Pion\Laravel\ChunkUpload\Handler\HandlerFactory;

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

    /**
     * @throws UploadFailedException
     */
    public function uploadVideo(Request $request): JsonResponse
    {
        $receiver = new FileReceiver("video", $request, HandlerFactory::classFromRequest($request));
        if ($receiver->isUploaded()=== false){
            return response()->json([
                'status' => false,
                'message' => 'No file uploaded',
            ]);
        }
        $save = $receiver->receive();
        if ($save->isFinished()){
            $file = $save->getFile();
            $fileName = time().'.'.$file->getClientOriginalName();
//            $file->move(public_path('uploads'), $fileName);
            $file->store('videos', 'public');
            return response()->json([
                'status' => true,
                'message' => 'File uploaded successfully',
                'url' => asset('videos/' . $fileName)
            ]);
        }
        return response()->json([
            "status" => true,
            'message' => ''
        ]);
    }
}
