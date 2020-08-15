<?php
    namespace App;

    use Illuminate\Database\Eloquent\Model;

    class Phones extends Model 
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
         'hospital_id', 'number',
      ];

      public function hospital()
      {
         return $this->belongsTo('App\Hospitals');
      }
    }