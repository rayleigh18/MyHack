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
      /**
       * The attributes that are mass assignable.
       *
       * @var array
       */
      protected $fillable = [
         'type', 'description', 'avg_time_minute'
      ];

      public function patients() { 
         return $this->belongsToMany('App\Patients','patiens_queue'); 
      }

      public function hospitals()
      {
         return $this->belongsToMany('App\Hospitals', 'App\ServicesHospital', 'service_id', 'hospital_id');
      }
    }