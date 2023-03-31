<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Languages;
use App\Models\Syntaxes;

class admin extends Controller
{
    public function getUsers()
    {
      return User::select('nom','prenom','email', 'created_at','updated_at')->where('role', 0)->get();
    }

    public function getLanguages()
    {
      return Languages::all();
    }

    public function getSyntaxes()
    {
      $data = Syntaxes::select('Syntaxes.id','Syntaxes.nom AS nom_Syntaxe', 'Syntaxes.created_at','Languages.nom AS nom_cat')
      ->join('Languages', 'Syntaxes.id_cat','=','Languages.id')
      ->where('Syntaxes.isArchived','=',0)
      ->get();

      return $data;
    }
}
