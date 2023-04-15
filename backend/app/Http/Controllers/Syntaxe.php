<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Syntaxes;

class Syntaxe extends Controller
{

    public function addsyntaxe(Request $request)
    {
        $Syntaxes = new Syntaxes();
        $Syntaxes->syntaxe = $request->syntaxe;
        $Syntaxes->isArchived = 0;
        $Syntaxes->id_language = $request->id_language;
        $Syntaxes->created_at = date("Y-m-d");
        $Syntaxes->save();
        return 'added';
    }

    function supprimerSyntaxe(Syntaxes $Syntaxes)
    {
        $Syntaxes->isArchived = 1;
        $Syntaxes->update();
        return 'deleted';
    }
    
    function getsyntaxe_byLanguage($id)
    {
        $Syntaxes = Syntaxes::where('id_language', $id)->orderBy('created_at', 'desc')->get();
        return $Syntaxes;
    }

    public function updateSyntaxe(Request $request)
    {
        $Syntaxes = Syntaxes::find($request->id);
        $Syntaxes->syntaxe = $request->syntaxe;
        if ($request->image != null) {
            $Syntaxes->image = $request->image;
        }
        if ($request->id_language != null) {
            $Syntaxes->id_language = $request->id_language;
        }
        $Syntaxes->update();
        return 'updated';
    }
}