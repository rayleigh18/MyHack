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
      /**
       * The attributes that are mass assignable.
       *
       * @var array
       */
       protected $fillable = [
        'name', 'address', 'city', 'region', 'postal_code', 'coordinate','user_id'
       ];

       public function services()
       {
         return $this->belongsToMany('App\Services', 'App\ServicesHospital', 'hospital_id', 'service_id');
       }

       public function phones()
       {
         return $this->hasMany('App\Phones');
       }
    }