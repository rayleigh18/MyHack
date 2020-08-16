<?php

namespace App\Http\Controllers;

use App\Patients;
use App\PatientsQueue;
use App\Serrvices;
use App\SerrvicesHospital;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class PatientsController extends Controller
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

    public function showAll(Request $request){
        return response()->json(Patients::all());
    }

    public function show(Request $request,$id){
        return response()->json(Patients::find($id));
    }

    public function create(Request $request){
        $data = $request->all();
        $data['user_id'] = Auth::id();
        $patient = Patients::create($data);
        return response()->json($data, 201);
    }

    public function update(Request $request,$id){
        $data = Patients::findOrFail($id);
        $data->update($request->all());

        return response()->json($data, 200);
    }

    public function destroy(Request $request,$id){
        Author::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }

    public function daftarService(Request $req)
    {
        $data = $req->all();
        $keluhan = $data['keluhan'];
        $listService = '';
        if (in_array('Demam',$keluhan) || in_array('Panas',$keluhan) ) $listService = Services::where('type','umum')->get(); 
        else if (in_array('Radang Tenggorokan',$keluhan) || in_array('Batuk',$keluhan) ) $listService = Services::where('type','tht')->get(); 
        else if (in_array('Nyeri di Perut',$keluhan)) $listService = Services::where('type','penyakit_dalam')->get();
        else  Services::get();
    }

    public function book(Request $req,$hosp_serv){
        $data = $req->all();
        $data['patient_id'] = Auth::user()->patient()->id;
        $data['wait_minute'] = PatientsQueue::where('terlayani',false)->count() * Services::where('id',ServicesHospital::where('id',$hosp_serv)->service_id)->first()->avg_time_minute;
        PatientsQueue::create($data);
        return ["success"=>"pasien berhasil mendaftar pelayanan di rumah sakit"];
    }
}
