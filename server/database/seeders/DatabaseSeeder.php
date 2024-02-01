<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Author;
use App\Models\Book;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // Array for authors
        $authors = [
            [
                'name' => 'Jane Doe',
                'gender' => 'Female',
                'age' => 35,
                'country' => 'USA',
                'genre' => 'Mystery',
            ],
            [
                'name' => 'John Smith',
                'gender' => 'Male',
                'age' => 45,
                'country' => 'UK',
                'genre' => 'Science Fiction',
            ],
            [
                'name' => 'Emily Brown',
                'gender' => 'Female',
                'age' => 28,
                'country' => 'Canada',
                'genre' => 'Fantasy',
            ],
            [
                'name' => 'Michael Anderson',
                'gender' => 'Male',
                'age' => 50,
                'country' => 'Australia',
                'genre' => 'Thriller',
            ],
            [
                'name' => 'Sarah White',
                'gender' => 'Female',
                'age' => 40,
                'country' => 'USA',
                'genre' => 'Romance',
            ],
            [
                'name' => 'David Johnson',
                'gender' => 'Male',
                'age' => 38,
                'country' => 'USA',
                'genre' => 'Science Fiction',
            ],
            [
                'name' => 'Laura Miller',
                'gender' => 'Female',
                'age' => 32,
                'country' => 'USA',
                'genre' => 'Mystery',
            ],
            [
                'name' => 'Robert Turner',
                'gender' => 'Male',
                'age' => 55,
                'country' => 'Canada',
                'genre' => 'Fantasy',
            ],
            [
                'name' => 'Megan Carter',
                'gender' => 'Female',
                'age' => 42,
                'country' => 'UK',
                'genre' => 'Thriller',
            ],
            [
                'name' => 'Christopher Davis',
                'gender' => 'Male',
                'age' => 48,
                'country' => 'USA',
                'genre' => 'Romance',
            ],
            // [
            //     'name' => 'Amanda Lewis',
            //     'gender' => 'Female',
            //     'age' => 30,
            //     'country' => 'Australia',
            //     'genre' => 'Mystery',
            // ],
            // [
            //     'name' => 'Richard Green',
            //     'gender' => 'Male',
            //     'age' => 41,
            //     'country' => 'UK',
            //     'genre' => 'Science Fiction',
            // ],
            // [
            //     'name' => 'Jessica Turner',
            //     'gender' => 'Female',
            //     'age' => 36,
            //     'country' => 'USA',
            //     'genre' => 'Fantasy',
            // ],
            // [
            //     'name' => 'Benjamin White',
            //     'gender' => 'Male',
            //     'age' => 47,
            //     'country' => 'Canada',
            //     'genre' => 'Romance',
            // ],
            // [
            //     'name' => 'Olivia Taylor',
            //     'gender' => 'Female',
            //     'age' => 31,
            //     'country' => 'Australia',
            //     'genre' => 'Thriller',
            // ],
            // [
            //     'name' => 'Daniel Brown',
            //     'gender' => 'Male',
            //     'age' => 49,
            //     'country' => 'USA',
            //     'genre' => 'Mystery',
            // ],
            // [
            //     'name' => 'Emily Johnson',
            //     'gender' => 'Female',
            //     'age' => 29,
            //     'country' => 'UK',
            //     'genre' => 'Fantasy',
            // ],
            // [
            //     'name' => 'Christopher Anderson',
            //     'gender' => 'Male',
            //     'age' => 39,
            //     'country' => 'USA',
            //     'genre' => 'Science Fiction',
            // ],
            // [
            //     'name' => 'Samantha Miller',
            //     'gender' => 'Female',
            //     'age' => 44,
            //     'country' => 'Canada',
            //     'genre' => 'Romance',
            // ],
            // [
            //     'name' => 'William Turner',
            //     'gender' => 'Male',
            //     'age' => 34,
            //     'country' => 'Australia',
            //     'genre' => 'Mystery',
            // ],
        ];

        // Array for books
        $books = [
            [
                'img' => '1.jpg',                'name' => 'The Silent Echo',
                'ISBN' => '978-1455561774',
                'author_id' => 1,
            ],
            [
                'name' => 'Lost in Time',
                'ISBN' => '978-0765326361',
                'img' => '2.jpg',                'author_id' => 2,
            ],
            [
                'name' => 'Whispers in the Wind',
                'ISBN' => '978-0345538376',
                'author_id' => 3,
                'img' => '3.jpg',
            ],
            [
                'img' => '4.jpg',                'name' => 'Eternal Shadows',
                'ISBN' => '978-0316306249',
                'author_id' => 4,
            ],
            [
                'name' => 'Midnight Serenade',
                'img' => '5.webp',                'ISBN' => '978-1250056957',
                'author_id' => 5,
            ],
            [
                'name' => 'Beyond the Horizon',
                'ISBN' => '978-0062561280',
                'author_id' => 6,
                'img' => '6.webp',
            ],
            [
                'name' => 'Hidden Secrets',
                'ISBN' => '978-1501154636',
                'author_id' => 7,
                'img' => '7.jpg',
            ],
            [
                'img' => '8.webp',                'name' => 'Infinite Dreams',
                'ISBN' => '978-0553274508',
                'author_id' => 8,
            ],
            [
                'name' => 'Whirlwind of Emotions',
                'ISBN' => '978-0425273865',
                'img' => '9.jpg',                'author_id' => 9,
            ],
            [
                'name' => 'Stolen Moments',
                'ISBN' => '978-0765376434',
                'author_id' => 10,
                'img' => '10.png',
            ],
            // [
            //     'img' => '11.jpeg',                'name' => 'Shadows of the Past',
            //     'ISBN' => '978-0345456878',
            //     'author_id' => 11,
            // ],
            // [
            //     'name' => 'Serenity\'s Song',
            //     'img' => '12.png',                'ISBN' => '978-0765326354',
            //     'author_id' => 12,
            // ],
            // [
            //     'name' => 'Dance of the Fireflies',
            //     'ISBN' => '978-0316341806',
            //     'author_id' => 13,
            //     'img' => '13.jpg',
            // ],
            // [
            //     'name' => 'The Enchanted Forest',
            //     'ISBN' => '978-1250119224',
            //     'author_id' => 14,
            //     'img' => '14.jpg',
            // ],
            // [
            //     'img' => '15.jpg',                'name' => 'Echoes of Destiny',
            //     'ISBN' => '978-0062561327',
            //     'author_id' => 15,
            // ],
            // [
            //     'name' => 'Twilight Whispers',
            //     'ISBN' => '978-1501111530',
            //     'img' => '16.jpg',                'author_id' => 16,
            // ],
            // [
            //     'name' => 'Mystical Reflections',
            //     'ISBN' => '978-0553564528',
            //     'author_id' => 17,
            //     'img' => '17.jpg',
            // ],
            // [
            //     'img' => '18.webp',                'name' => 'The Secret Garden',
            //     'ISBN' => '978-0143106457',
            //     'author_id' => 18,
            // ],
            // [
            //     'name' => 'Endless Journey',
            //     'img' => '19.jpg',                'ISBN' => '978-0425262951',
            //     'author_id' => 19,
            // ],
            // [
            //     'name' => 'Harmony of the Spheres',
            //     'ISBN' => '978-0765364097',
            //     'author_id' => 20,
            //     'img' => '20.jpg',
            // ],
        ];

        // Seed authors
        foreach ($authors as $authorData) {
            Author::create($authorData);
        }

        // Seed books
        foreach ($books as $bookData) {
            Book::create($bookData);
        }
    }
}
