<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Hospitals;
use App\Services;
use App\Users;
use App\ServicesHospital;
use App\PatiensQueue;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Cookie;

class HospitalController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function insertData(Request $req)
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

        $data = $req->all();
        $data['user_id'] = Auth::id();
        Hospitals::create($data);
        return redirect('/');
    }

    public function addNewService(Request $request){
        $data = $request->json()->all();
        $service = Services::create($data);
        return ["success"=>"Jenis pelayanan baru berhasil ditambahkan"];
    }

    public function addMyService(Request $req)
    {
        $data = $req->all();
        $data['hospital_id'] = Auth::user()->hospital()->id;
        ServicesHospital::create($data);
        return ["success"=>"Rumah sakit membuka pelayanan baru"];
    }

    public function myServices(Request $req)
    {
        return Services::where('hospital_id',Auth::user()->hospital()->id);
    }

    public function myPatients(Request $req,$service)
    {
        $listPatienst = PatiensQueue::where('service_id',$service)->where('hospital_id',Auth::user()->hospital()->id)->where('terlayani',false)->all();
        return $listPatienst;
    }

    public function confirmPatients(Request $req,$id){
        PatientsQueue::find($id)->update('terlayani',true);
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
  
            return $apikey;
        }else{
            return response()->redirect('/');
  
        }
    }
    //
}
