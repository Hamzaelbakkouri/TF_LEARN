<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comments;

class Comment extends Controller
{
    public function sendMessage(Request $request){
        $message=new Comments();
        $message->id_group=$request->idgroup;
        $message->id_user=$request->iduser;
        $message->message=$request->message;
        $message->save();
    }

    public function getmessages($id){
        return Comments::select('Comments.message','Comments.id','users.nom','users.prenom','Comments.id_user')
        ->join('users','users.id','Comments.id_user')
        ->where('Comments.id_group','=',$id)
        ->orderBy('Comments.id', 'asc')
        ->get();
    }
}
