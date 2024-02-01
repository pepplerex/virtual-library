<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\Controller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/books', [BookController::class, 'all']);

Route::get('/book/{id}', [BookController::class, 'read']);

Route::post('/book', [BookController::class, 'create']);

Route::get('/authors', [Controller::class, 'getauthors']);

Route::get('/author/{id}', [Controller::class, 'read']);

Route::post('/author', [Controller::class, 'create']);
