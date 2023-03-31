<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users;
use App\Http\Controllers\admin;
use App\Http\Controllers\Language;
use App\Http\Controllers\Syntaxe;
use App\Http\Controllers\Comment;

// connect
Route::post('/login', [Users::class, 'login']);
Route::post('/register', [Users::class, 'signup']);

// syntaxes
Route::post('/syntaxe/addsyntaxe', [Syntaxe::class, 'addsyntaxe']);
Route::get('/syntaxe/getsyntaxe/{id}', [Syntaxe::class, 'getsyntaxe']);
Route::post('/syntaxe/updatesyntaxe', [syntaxe::class, 'updatesyntaxe']);
Route::patch('/syntaxe/supprimersyntaxe/{syntaxe}', [syntaxe::class, 'supprimersyntaxe']);

// languages
Route::delete('/categorie/supprimerCat/{id}', [Language::class, 'supprimerCat']);
Route::post('/categorie/addCat', [Language::class, 'addCat']);
Route::patch('/categorie/modifierCat/{id}', [Language::class, 'modifierCat']);

// comments
Route::get('/comments/{id}', [Comment::class, 'getcomments']);
Route::post('/comments', [Comment::class, 'sendcomment']);

// admin
Route::get('/admin/getsyntaxes', [admin::class, 'getSyntaxes']);
Route::get('/admin/getUsers', [admin::class, 'getUsers']);
Route::get('/admin/getLanguage', [admin::class, 'getLanguages']);

// user 
Route::get('/user/getsyntaxes/{id}', [Users::class, 'getsyntaxes']);
Route::delete('/user/supprimerCompte', [Users::class, 'supprimerCompte']);
Route::put('/user/modifierCompte/', [Users::class, 'modifierCompte']);
Route::post('/user/ajouterFavorie', [Users::class, 'ajouterFavorie']);
Route::get('/user/getFavories/{id}', [Users::class, 'getFavories']);
Route::delete('/user/supprimerFavorie/{id}', [Users::class, 'supprimerFavorie']);
Route::get('/user/getsyntaxebyDate/{date}', [Users::class, 'getsyntaxebyDate']);
Route::get('/user/getsyntaxebyCat/{cat}', [Users::class, 'getsyntaxebyCat']);
Route::get('/user/getsyntaxebyNom/{nom}', [Users::class, 'getsyntaxebyNom']);

// reactions
Route::patch('/user/like', [Users::class, 'like']);
Route::patch('/user/dislike', [Users::class, 'dislike']);
