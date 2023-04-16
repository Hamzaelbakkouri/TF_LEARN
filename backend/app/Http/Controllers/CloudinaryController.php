<?php

namespace App\Http\Controllers;

use Cloudinary\Api\ApiUtils;
use Illuminate\Http\Request;

class CloudinaryController extends Controller
{
    public function signature()
    {

        $timestamp = time();
        $params = [
            'timestamp' => $timestamp,
            'folder' => 'uploads',
        ];
        $signature = ApiUtils::signParameters($params, env('CLOUDINARY_API_SECRET'));
        return response()->json([
            'signature' => $signature,
            'timestamp' => $timestamp
        ]);
    }
}