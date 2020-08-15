<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use Illuminate\Http\Request;

use App\Users;

class UsersController extends Controller

{

  public function __construct()

   {

     //  $this->middleware('auth:api');

   }

   public function register(Request $request)
   {
      $username = $request->input("username");
      $email = $request->input("email");
      $password = $request->input("password");
      $no_hp = $request->input("no_hp");

      $hashPwd = Hash::make($password);

      $register = Users::create([
          "username" => $username,
          "email" => $email,
          "password" => $hashPwd,
          "no_hp" => $no_hp
      ]);


      if ($register) {
          return response()->json([
              "success" => true,
              "message" => "register_success",
              "data"    => $register
          ],201);
      } else {
          return response()->json([
              "success" => false,
              "message" => "vailed_regiser",
              "data"   => ''
          ],404);
      }
   }

   public function login(Request $request)

   {
      $this->validate($request, [
        'email' => 'required',
        'password' => 'required'
      ]);

      $user = Users::where('email', $request->input('email'))->first();

      if(Hash::check($request->input('password'), $user->password)){

          $apikey = base64_encode(str::random(40));

          Users::where('email', $request->input('email'))->update(['api_token' => "$apikey"]);

          return response()->json([
            'success' => true,
            'message' => 'login_success',
            'data' => [
              'user' => $user,
              'api_key' => $apikey
            ]
          ],201);
      }else{
          return response()->json([
            'success' => false,
            'message' => 'login_failed',
            'data' => ''
          ],401);

      }

    }

}    

?>