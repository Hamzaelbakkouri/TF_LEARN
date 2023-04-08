<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\example;

class Examples extends Controller
{
    public function get_S_examples($id)
    {
        $example = example::find($id);
        $example->get();
    }

    public function add_example(Request $request)
    {
        $example = new example();
        $example->id_syntaxe = $request->id_syntaxe;
        $example->example = $request->example;
        $example->role = $request->role;
        $example->save();
        return 'added';
    }

    public function get_all_examples()
    {
        return example::all();
    }
}
