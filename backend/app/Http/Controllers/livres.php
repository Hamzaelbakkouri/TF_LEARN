<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Syntaxes;

class Syntaxe extends Controller
{

    public function addSyntaxes(Request $request)
    {
        $Syntaxes = new Syntaxes();
        $Syntaxes->nom = $request->nom;
        $Syntaxes->image = $request->file('image')->store('uploads', 'public');
        $Syntaxes->pdf = $request->file('file')->store('uploads', 'public');
        $Syntaxes->isArchived = 0;
        $Syntaxes->id_cat = $request->id_cat;
        $Syntaxes->created_at = date("Y-m-d");
        $Syntaxes->save();
        return 'added';
    }

    function supprimerSyntaxes(Syntaxes $Syntaxes)
    {
        $Syntaxes->isArchived = 1;
        $Syntaxes->update();
        return 'deleted';
    }


    function getSyntaxes($id)
    {
        $Syntaxes = Syntaxes::find($id);
        return $Syntaxes;
    }

    public function updateSyntaxes(Request $request)
    {
        $Syntaxes = Syntaxes::find($request->id);
        $Syntaxes->nom = $request->nom;
        if ($request->image != null) {
            $Syntaxes->image = $request->image;
        }
        if ($request->file != null) {
            $Syntaxes->pdf = $request->file;
        }
        if ($request->id_cat != null) {
            $Syntaxes->id_cat = $request->id_cat;
        }
        $Syntaxes->update();
        return 'updated';
    }
}
