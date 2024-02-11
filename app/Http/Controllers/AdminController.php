<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    // Função para renderizar a página de dashboard do admin
    public function index()
    {
        return view('admin.dashboard');
    }

    // Outras funções para gerenciar o admin...
}
