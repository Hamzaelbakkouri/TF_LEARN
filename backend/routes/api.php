<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users;
use App\Http\Controllers\admin;
use App\Http\Controllers\CloudinaryController;
use App\Http\Controllers\Language;
use App\Http\Controllers\Syntaxe;
use App\Http\Controllers\Comment;
use App\Http\Controllers\Examples;
use GuzzleHttp\Psr7\Request;

// connect
Route::post('/login', [Users::class, 'login']);
Route::post('/register', [Users::class, 'signup']);

// syntaxes
Route::post('/syntaxe/addsyntaxe', [Syntaxe::class, 'addsyntaxe']);
Route::get('/syntaxe/getsyntaxe/{id}', [Syntaxe::class, 'getsyntaxe']);
Route::post('/syntaxe/updatesyntaxe', [syntaxe::class, 'updatesyntaxe']);
Route::patch('/syntaxe/supprimersyntaxe/{syntaxe}', [syntaxe::class, 'supprimersyntaxe']);

// examples
Route::post('/syntaxe/addexample', [Examples::class, 'add_example']);
Route::get('/syntaxe/getexample/{id}', [Examples::class, 'get_S_examples']);
Route::get('/syntaxe/get_ALL_example/', [Examples::class, 'get_all_examples']);

// languages
Route::delete('/language/deletelanguage/{id}', [Language::class, 'supprimerCat']);
Route::post('/language/addlanguage', [Language::class, 'addCat']);
Route::patch('/language/updatelanguage/{id}', [Language::class, 'modifierCat']);

// comments
Route::get('/getcomments/{id}', [Comment::class, 'getcomments']);
Route::post('/send/comment', [Comment::class, 'sendcomments']);

// admin
Route::get('/admin/getsyntaxes', [admin::class, 'getSyntaxes']);
Route::get('/admin/getUsers', [admin::class, 'getUsers']);
Route::get('/admin/getLanguage', [admin::class, 'getLanguages']);

// user
Route::get('/user/getsyntaxes/{id}', [Users::class, 'getsyntaxes']);
Route::post('/user/ajouterFavorie', [Users::class, 'ajouterFavorie']);
Route::get('/user/getFavories/{id}', [Users::class, 'getFavories']);
Route::delete('/user/supprimerFavorie/{id}', [Users::class, 'supprimerFavorie']);
Route::get('/user/getsyntaxebyCat/{cat}', [Users::class, 'getsyntaxebyCat']);
Route::get('/user/getsyntaxebyNom/{nom}', [Users::class, 'getsyntaxebyNom']);

// cloudinary
Route::get('cloudinary/signature', CloudinaryController::class . '@signature');

// reactions
Route::patch('/user/like', [Users::class, 'like']);
Route::patch('/user/dislike', [Users::class, 'dislike']);
