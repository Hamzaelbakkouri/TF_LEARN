<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Languages;

class Language extends Controller
{
    public function supprimerCat($id)
    {
        $Languages = Languages::find($id);
        $Languages->delete();
        return 'deleted';
    }

    public function languageGET($id)
    {
        $Language = Languages::find($id);
        $Language->get();
        return $Language;
    }

    public function addCat(Request $request)
    {
        $Languages = new Languages();
        $Languages->nom = $request->nom;
        $Languages->image = $request->image;
        $Languages->save();
        return "added";
    }

    public function modifierCat($id, Request $request)
    {
        $Languages = Languages::find($id);
        $Languages->nom = $request->nom;
        $Languages->image = $request->image;
        $Languages->update();
        return 'updated';
    }
}
