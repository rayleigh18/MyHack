<?php
    namespace App;

    use Illuminate\Database\Eloquent\Model;

    class Hospitals extends Model 
    {
       //
       protected $guarded = [];
       /*
       * Get Todo of User
       *
       */

       public function services()
       {
         return $this->belongsToMany('App\Services', 'App\ServicesHospital', 'hospital_id', 'service_id');
       }
    }