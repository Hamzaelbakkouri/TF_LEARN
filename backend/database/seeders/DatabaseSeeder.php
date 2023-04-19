<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Syntaxes;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(6)->create();
        $file = Storage::disk('local')->get('/data/java.json');
        $data = json_decode($file, true);
        foreach ($data["matches"] as $value) {
            $i = new Syntaxes([
                'id_language' => 20,
                'syntaxe' => $value,
                'isArchived' => 0
            ]);
            $i->save();
        }
    }
}