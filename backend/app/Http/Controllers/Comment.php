<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comments;

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
        return Comments::select('Comments.comment', 'Comments.id', 'Comments.created_at', 'Comments.id_user')
            ->join('languages', 'languages.id')
            ->where('languages.id', '=', $id)
            ->orderBy('Comments.id', 'asc')
            ->get();
    }
}
