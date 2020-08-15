<?php
    namespace App;

    use Illuminate\Database\Eloquent\Model;

    class Patients extends Model 
    {
       //
       protected $guarded = ['token_api'];
       /*
       * Get Todo of User
       *
       */

      public function services() { 
         return $this->belongsToMany('App\Services','App\PatiensQueue','patien_id','service_id'); 
      }
    }