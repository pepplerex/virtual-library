<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    //
    public function all()
    {
        $books = Book::orderBy('id', 'desc')->get();
        return response()->json($books);
    }

    public function read(Request $req)
    {
        $book = Book::find($req->id);
        return response()->json($book);
    }

    public function create(Request $req)
    {
        $data = [];
        $data = $req->validate([
            'name' => 'required',
            'ISBN' => 'required',
            'author_id' => 'required'
        ]);
        $data["img"] = "book2.png";
        Book::create($data);
        return response()->json('success', 204);
    }
}
