<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
    public function getauthors()
    {
        $authors = Author::orderBy('id', 'desc')->get();
        return response()->json($authors);
    }

    public function read(Request $req)
    {
        $authors = Author::find($req->id);
        return response()->json($authors);
    }

    public function create(request $req)
    {
        $data = $req->validate([
            'name' => 'required',
            'age' => 'required',
            'genre' => 'required',
            'country' => 'required',
            'gender' => 'required'
        ]);
        Author::create($data);
        return response()->json('success', 204);
    }
}
