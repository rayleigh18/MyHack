<?php
    namespace App;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Contracts\Auth\Authenticatable;
    use Illuminate\Auth\Authenticatable as AuthenticableTrait;
    use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

    class Users extends Model implements Authenticatable, AuthorizableContract
    {
       //
       use AuthenticableTrait;
       protected $fillable = ['username','email','password','no_hp','api_token'];
       protected $hidden = [
       'password', 'api_token'
       ];
       /*
       * Get Todo of User
       *
       */
       public function patient()
       {
           return $this->hasMany('App\Patients','user_id');
       }
    }