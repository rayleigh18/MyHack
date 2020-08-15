<?php
    namespace App;

    use Illuminate\Database\Eloquent\Model;

    class PatiensQueue extends Model 
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
      protected $fillable = ['patien_id','hospital_id','services_id','queue_number','keluhan'];
    }