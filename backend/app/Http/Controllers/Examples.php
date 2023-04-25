<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\example;

class Examples extends Controller
{
    public function get_S_examples($id)
    {
        $example = example::where('id_syntaxe', $id)->orderBy('created_at', 'desc')->get();
        return $example;
    }

    public function addexample(Request $request)
    {
        $example = new example();
        $example->example = $request->example;
        $example->role = $request->role;
        $example->id_syntaxe = $request->id_syntaxe;
        $example->save();
        return 'added';
    }
}
