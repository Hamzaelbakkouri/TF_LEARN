<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Languages;
use App\Models\Syntaxes;

class admin extends Controller
{
    public function getUsers()
    {
      return User::all();
    }

    public function getLanguages()
    {
      return Languages::all();
    }

    public function getSyntaxes()
    {
      $data = Syntaxes::all();
      
      return $data;
    }
}
