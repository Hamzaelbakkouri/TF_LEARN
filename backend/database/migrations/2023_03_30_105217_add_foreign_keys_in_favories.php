<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('favories', function (Blueprint $table) {
            $table->foreignId('id_language')->references('id')->on('languages')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('id_user')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    
    public function down(): void
    {
        Schema::table('favories', function (Blueprint $table) {
            $table->dropForeign('id_language');
            $table->dropForeign('id_user');
        });
    }
};
