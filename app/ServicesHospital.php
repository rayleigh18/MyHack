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
       * The attributes that are mass assignable.
       *
       * @var array
       */
      protected $fillable = [
         'service_id', 'hospital_id',
      ];

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