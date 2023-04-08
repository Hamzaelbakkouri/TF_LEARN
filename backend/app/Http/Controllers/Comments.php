<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comments;

class Comment extends Controller
{
    public function sendcomments(Request $request){
        $message=new Comments();
        $message->id_language=$request->idlanguage;
        $message->id_user=$request->iduser;
        $message->Comment=$request->Comment;
        $message->save();
        return 'send';
    }
    
    public function getmessages($id){
        return Comments::select('Comments.message','Comments.id','users.nom','users.prenom','Comments.id_user')
        ->join('users','users.id','Comments.id_user')
        ->where('Comments.id_group','=',$id)
        ->orderBy('Comments.id', 'asc')
        ->get();
    }
}
