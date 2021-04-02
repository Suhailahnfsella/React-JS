<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{

    public function index()
    {
        $data = User::where('level', '<>', 'pelanggan')->get();

        return response()->json($data);
    }

    public function register(Request $request)
    {

        $this->validate($request, [
            'email' => 'required',
            'password' => 'required'
        ]);

        $data = [
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'level' => $request->input('level'),
            'api_token' => '12345',
            'status' => '1',
            'relasi' => $request->input('relasi')
        ];

        $users = User::create($data);

        return response()->json($users);
    }

    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $user = User::where('email', $email)->first();

        if (isset($user)) {
            if ($user->status === 1) {
                if (Hash::check($password, $user->password)) {
                    $token = Str::random(40);

                    $user->update([
                        'api_token' => $token
                    ]);

                    return response()->json([
                        'pesan' => 'Login anda sukses',
                        'token' => $token,
                        'data' => $user
                    ]);
                } else {
                    return response()->json([
                        'pesan' => 'Login anda gagal',
                        'data' => ''
                    ]);
                }
            } else {
                return response()->json([
                    'pesan' => 'Login anda gagal',
                    'data' => ''
                ]);
            }
        } else {
            return response()->json([
                'pesan' => 'Login anda gagal, email tidak terdaftar',
                'data' => ''
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $users = User::where('id', $id)->update($request->all());

        if ($users) {
            return response()->json([
                'pesan' => 'Data berhasil diupdate'
            ]);
        }
    }
}
