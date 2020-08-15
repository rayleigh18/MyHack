<?php

namespace App\Http\Controllers;

class HospitalController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function addNewService(Request $request){
        $data = $request->json()->all();
        $service = Services::create($data);
        return "Berhasil";
    }

    //
}
