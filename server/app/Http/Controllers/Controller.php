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
    public function index()
    {
        $authors = Author::orderBy('id', 'desc')->get();
        return response()->json($authors);
    }

    public function show(Request $req)
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

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'gender' => 'required',
            'age' => 'required|integer',
            'country' => 'required',
            'genre' => 'required',
        ]);

        $author = Author::find($id);

        if (!$author) {
            return response()->json(['error' => 'Author not found'], 404);
        }

        $author->update($request->all());

        return response()->json($author);
    }
}
