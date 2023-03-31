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
            $user->role = 0;
            $user->save();
            return 'inserted';
        }
    }

    public function supprimerCompte(Request $request)
    {
        $user = User::find($request->id);
        $user->delete();
        return 'deleted';
    }

    public function modifierCompte(Request $request)
    {
        $id = $request->id;
        $user = User::find($id);
        $user->nom = $request->nom;
        $user->prenom = $request->prenom;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return ['etat' => 'updated'];
    }


    public function ajouterFavorie(Request $request)
    {
        $count = Favorie::select('id_syntaxe', 'id_user')
            ->where('id_syntaxe', '=', $request->id_livre)
            ->where('id_user', '=', $request->id_user)
            ->count();
        if ($count == 0) {
            $favorie = new Favorie();
            $favorie->id_livre = $request->input('id_livre');
            $favorie->id_user = $request->input('id_user');
            $favorie->save();
            return "added";
        } else {
            return "deja";
        }
    }

    public function getFavories($id)
    {
        return Syntaxes::select('Syntaxes.id', 'Syntaxes.nom AS nom_Syntaxes', 'Syntaxes.image', 'Syntaxes.pdf', 'Syntaxes.created_at', 'Languages.nom AS nom_cat', 'favories.id as id_favorie')
            ->join('Languages', 'Syntaxes.id_cat', '=', 'Languages.id')
            ->join('favories', 'favories.id_livre', '=', 'Syntaxes.id')
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

    public function getLivrebyDate($date)
    {
        return Syntaxes::select('Syntaxes.id', 'Syntaxes.nom AS nom_livre', 'Syntaxes.created_at', 'Languages.nom AS nom_cat')
            ->join('Languages', 'Languages.id_cat', '=', 'Languages.id')
            ->where('Syntaxes.isArchived', '=', 0)
            ->where('Syntaxes.created_at', '=', $date)
            ->get();
    }

    public function getLivrebyCat($cat)
    {
        return Syntaxes::select('Syntaxes.id', 'Syntaxes.nom AS nom_livre', 'Syntaxes.created_at', 'Languages.nom AS nom_cat')
            ->join('Languages', 'Syntaxes.id_cat', '=', 'Languages.id')
            ->where('Syntaxes.isArchived', '=', 0)
            ->where('Syntaxes.id_cat', '=', $cat)
            ->get();
    }

    public function getLivrebyNom($nom)
    {
        return Syntaxes::select('Syntaxes.id', 'Syntaxes.nom AS nom_Syntaxe', 'Syntaxes.created_at', 'Languages.nom AS nom_cat')
            ->join('Languages', 'Syntaxes.id_cat', '=', 'Languages.id')
            ->where('Syntaxes.isArchived', '=', 0)
            ->where('Syntaxes.nom', 'like', $nom)
            ->get();
    }

    public function getSyntaxes($id)
    {
        return DB::table('Syntaxes')
            ->leftJoin('reactions', function ($join) use ($id) {
                $join->on('language.id', '=', 'reactions.id_language')
                    ->where('reactions.id_user', '=', $id);
            })
            ->select('Syntaxes.id as idlivre', 'Syntaxes.nom AS nom_livre', 'Syntaxes.image', 'Syntaxes.pdf', 'Syntaxes.created_at', 'Languages.nom AS nom_cat', 'reactions.*')
            ->join('Languages', 'Syntaxes.id_cat', '=', 'Languages.id')
            ->orderBy('Syntaxes.id', 'asc')
            ->get();
    }

    public function like(Request $request)
    {
        $reaction = Reaction::where('id_livre', '=', $request->id_livre)
            ->where('id_user', '=', $request->id_user)
            ->get();
        if (count($reaction) == 0) {
            $reaction = new Reaction();
            $reaction->id_user = $request->id_user;
            $reaction->id_livre = $request->id_livre;
            $reaction->reaction = 1;
            $reaction->note = 0;
            $reaction->save();
        } else {
            Reaction::where('id_livre', '=', $request->id_livre)->where('id_user', '=', $request->id_user)->update(['reaction' => 1]);
        }
    }
    public function dislike(Request $request)
    {
        $reaction = Reaction::where('id_livre', '=', $request->id_livre)
            ->where('id_user', '=', $request->id_user)
            ->get();
        if (count($reaction) == 0) {
            $reaction = new Reaction();
            $reaction->id_user = $request->id_user;
            $reaction->id_livre = $request->id_livre;
            $reaction->reaction = -1;
            $reaction->note = 0;
            $reaction->save();
        } else {
            Reaction::where('id_livre', '=', $request->id_livre)->where('id_user', '=', $request->id_user)->update(['reaction' => -1]);
        }
    }

    public function getGroups($id)
    {
        return DB::table('groups')
            ->leftJoin('membres', function ($join) use ($id) {
                $join->on('groups.id', '=', 'membres.id_group')
                    ->where('membres.id_user', '=', $id);
            })
            ->select('groups.id', 'groups.nom', 'groups.description', 'groups.image', 'groups.created_at', 'users.nom as nom_user', 'membres.id as id_membre')
            ->join('users', 'users.id', '=', 'groups.id_user')
            ->get();
    }
}
