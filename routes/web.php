<?php

use App\PatiensQueue;

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/queue/list/{service}',['middleware'=>'auth',function(Request $request, $service){
    //mendapatkan daftar antrian pada suatu pelayanan rumah sakit
    $userRS = Auth::users()->hospitals();
    $queue = PatiensQueue::find()->where('hospital_id',$userRS->id)->where('services_id',$service);
    return $queue;
}]);

$router->get('/services',['middleware'=>'auth',function(Request $request){
    $userRS = Auth::users()->hospitals();
    $services = $userRS->services();
    return $services;
}]);