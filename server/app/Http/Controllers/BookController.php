<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    //
    public function index()
    {
        $books = Book::orderBy('id', 'desc')->get();
        return response()->json($books);
    }

    public function show(Request $req)
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

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'ISBN' => 'required',
            'author_id' => 'required|exists:authors,id',
        ]);

        $book = Book::find($id);

        if (!$book) {
            return response()->json(['error' => 'Book not found'], 404);
        }

        $book->update($request->all());

        return response()->json($book);
    }
}
