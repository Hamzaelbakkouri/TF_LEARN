<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users;
use App\Http\Controllers\admin;
use App\Http\Controllers\categories;
use App\Http\Controllers\groupes;
use App\Http\Controllers\livres;
use App\Http\Controllers\Membres;
use App\Http\Controllers\Messages;

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: *");
// header("Access-Control-Allow-Headers: *");


Route::post('/login', [Users::class, 'login']);
Route::post('/signup', [Users::class, 'signup']);
Route::get('/admin/getLivres', [admin::class, 'getLivres']);
Route::post('/livre/addLivre', [livres::class, 'addLivre']);
Route::get('/user/mesGroupes/{id}', [Users::class, 'mesGroupes']);
Route::post('/user/rejoindreGroup', [Users::class, 'rejoindreGroup']);
Route::get('/user/getLivres/{id}', [Users::class, 'getLivres']);
Route::get('/user/getGroups/{id}', [Users::class, 'getGroups']);
Route::get('/groupe/getGroups', [groupes::class, 'getGroups']);
Route::get('/livre/getlivre/{id}', [livres::class, 'getlivre']);
Route::get('/messages/{id}', [Messages::class, 'getmessages']);
Route::post('/messages', [Messages::class, 'sendMessage']);
Route::get('/membres/{id}', [Membres::class, 'getMembres']);
Route::post('/groupe/creerUngroupe', [groupes::class, 'creerUngroupe']);
Route::delete('/user/supprimerCompte', [Users::class, 'supprimerCompte']);
Route::put('/user/modifierCompte/', [Users::class, 'modifierCompte']);
Route::post('/livre/updateLivre', [Livres::class, 'updateLivre']);
Route::post('/user/ajouterFavorie', [Users::class, 'ajouterFavorie']);
Route::get('/user/getFavories/{id}', [Users::class, 'getFavories']);
Route::delete('/user/supprimerFavorie/{id}', [Users::class, 'supprimerFavorie']);
Route::delete('/user/supprimerMongroup/{group}', [Users::class, 'supprimerMongroup']);
Route::get('/user/getLivrebyDate/{date}', [Users::class, 'getLivrebyDate']);
Route::get('/user/getLivrebyCat/{cat}', [Users::class, 'getLivrebyCat']);
Route::get('/user/getLivrebyNom/{nom}', [Users::class, 'getLivrebyNom']);
Route::patch('/user/like', [Users::class, 'like']);
Route::patch('/user/dislike', [Users::class, 'dislike']);
Route::get('/admin/getUsers', [admin::class, 'getUsers']);
Route::get('/admin/getCats', [admin::class, 'getCats']);
Route::delete('/categorie/supprimerCat/{id}', [categories::class, 'supprimerCat']);
Route::post('/categorie/addCat', [categories::class, 'addCat']);
Route::patch('/categorie/modifierCat/{id}', [categories::class, 'modifierCat']);
Route::patch('/livre/supprimerLivre/{livre}', [livres::class, 'supprimerLivre']);



