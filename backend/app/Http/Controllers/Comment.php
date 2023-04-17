<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comments;
use Illuminate\Support\Facades\DB;

class Comment extends Controller
{
    public function sendcomments(Request $request)
    {
        $message = new Comments();
        $message->id_language = $request->idlanguage;
        $message->id_user = $request->iduser;
        $message->comment = $request->Comment;
        $message->save();
        return 'send';
    }

    public function getcomments($id)
    {
        return DB::table('comments')
            ->join('languages', 'comments.id_language', '=', 'languages.id')
            ->join('users', 'comments.id_user', '=', 'users.id')
            ->select('comments.id','comments.comment','languages.image', 'users.nom as userName', 'comments.created_at', 'users.prenom', 'languages.nom')
            ->where('comments.id_language', '=', $id)
            ->get();
    }
}
