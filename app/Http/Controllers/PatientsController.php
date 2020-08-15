<?php

namespace App\Http\Controllers;

use App\Patients;
use Illuminate\Http\Request;

class PatientsController extends Controller
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

    public function showAll(Request $request){
        return response()->json(Patients::all());
    }

    public function show(Request $request,$id){
        return response()->json(Patients::find($id));
    }

    public function create(Request $request){
        $data = $request->json()->all();
        $service = Services::create($data);
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
}
