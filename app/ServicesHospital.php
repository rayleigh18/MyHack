<?php
    namespace App;

    use Illuminate\Database\Eloquent\Model;

    class ServicesHospital extends Model 
    {
       //
       protected $guarded = [];
       /*
       * Get Todo of User
       *
       */

       /**
       * The table associated with the model.
       *
       * @var string
       */
      protected $table = 'services_in_hospital';

      public function patients() { 
         return $this->belongsToMany('App\Patients','App\PatiensQueue'); 
      }
    }