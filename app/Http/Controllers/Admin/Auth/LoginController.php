<?php
// app/Http/Controllers/Admin/Auth/LoginController.php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;


class LoginController extends Controller
{
    // Método para exibir o formulário de login
    public function showLoginForm()
    {
        return view('admin.login');
    }

    // Método para processar o login
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = Str::random(80); // Gera um token aleatório de 80 caracteres
            $user->api_token = hash('sha256', $token); // Hash SHA-256 do token
            $user->save();

            
            return response()->json(['token' => $user->api_token], 200);
        } else {
            // Se as credenciais estiverem incorretas, retorne um status 401
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
    }
    public function logout()
    {
        $user = Auth::user();
        $user->api_token = null; // Limpa o token do usuário
        $user->save();

        return response()->json(['message' => 'Logout realizado com sucesso'], 200);
    }

}
