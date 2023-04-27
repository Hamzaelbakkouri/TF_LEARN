<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Favorie;
use App\Models\Syntaxes;
use App\Models\Reaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class Users extends Controller
{

    public function login(Request $request)
    {
        $pass = DB::table('Users')->where('email', $request->input('email'))->value('password');
        if (Hash::check($request->input('password'), $pass)) {
            $user = DB::table('Users')->where('email', $request->input('email'))->first();
            $response = [
                'user' => $user
            ];
            return $response;
        }
    }

    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nom' => 'required',
            'prenom' => 'required',
            'email' => ['required', 'email'],
            'password' => 'required',
            'confirmation' => 'required|same:password'
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => 'fail',
                'message' => $validator->errors()
            ];
            return $response;
        } else {
            $user = new User();
            $user->nom = $request->input('nom');
            $user->prenom = $request->input('prenom');
            $user->email = $request->input('email');
            $user->password = Hash::make($request->input('password'));
            $user->role = 1;
            $user->save();
            return 'inserted';
        }
    }

    public function ajouterFavorie(Request $request)
    {
        $count = Favorie::select('id_language', 'id_user')
            ->where('id_language', '=', $request->id_syntaxe)
            ->where('id_user', '=', $request->id_user)
            ->count();
        if ($count == 0) {
            $favorie = new Favorie();
            $favorie->id_language = $request->input('id_language');
            $favorie->id_user = $request->input('id_user');
            $favorie->save();
            return "added";
        } else {
            return "deja";
        }
    }

    public function getFavories($id)
    {
        return Favorie::select('Syntaxes.id', 'Syntaxes.nom AS nom_Syntaxes', 'Syntaxes.image', 'Syntaxes.pdf', 'Syntaxes.created_at', 'Languages.nom AS nom_cat', 'favories.id as id_favorie')
            ->join('Languages', 'Syntaxes.id_cat', '=', 'Languages.id')
            ->join('favories', 'favories.id_syntaxe', '=', 'Syntaxes.id')
            ->where('Syntaxes.isArchived', '=', 0)
            ->where('favories.id_user', '=', $id)
            ->get();
    }

    public function supprimerFavorie($id)
    {
        $favorie = Favorie::find($id);
        $favorie->delete();
        return 'deleted';
    }
}
