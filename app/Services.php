<?php
    namespace App;

    use Illuminate\Database\Eloquent\Model;

    class Services extends Model 
    {
       //
       protected $guarded = [];
       /*
       * Get Todo of User
       *
       */

      public function patients() { 
         return $this->belongsToMany('App\Patients','patiens_queue'); 
      }

      public function hospitals()
      {
         return $this->belongsToMany('App\Hospitals', 'App\ServicesHospital', 'service_id', 'hospital_id');
      }
    }