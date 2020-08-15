<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Hospitals;
use Illuminate\Support\Facades\Auth;

class HospitalController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function insertData(Request $req)
    {
        $data = $req->all();
        $data['user_id'] = Auth::id();
        Hospitals::create($data);
        return ["success"=>"Pendaftaran rumah sakit selesai"];
    }

    public function addNewService(Request $request){
        $data = $request->json()->all();
        $service = Services::create($data);
        return "Berhasil";
    }

    //
}
