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

// Books route

Route::get('/books', [BookController::class, 'index']);

Route::get('/book/{id}', [BookController::class, 'show']);

Route::post('/book', [BookController::class, 'create']);

Route::put('/books/{id}', [BookController::class, 'update']);

// Auhtor routes 

Route::get('/authors', [Controller::class, 'index']);

Route::get('/author/{id}', [Controller::class, 'show']);

Route::post('/author', [Controller::class, 'create']);

Route::put('/authors/{id}', [Controller::class, 'update']);
