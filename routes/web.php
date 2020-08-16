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

$router->get('/', function () {
    return view('landingPage');
});

$router->post("/register", "UsersController@register");
$router->post("/login", "UsersController@login");

$router->get('/mypatients',function () {
    return view('patients');
});
$router->get('/patients/list/{service}','HospitalController@myPatients');

$router->get('/services/list','HospitalController@myServices');

$router->post("/hospital/newdata","HospitalController@insertData");
$router->post("/hospital/login","HospitalController@login");
$router->get("/hospital/near/{x}/{y}","HospitalController@near");

$router->group(['prefix' => 'patients'], function () use ($router) {
    $router->get(   '',         ['uses' => 'PatientsController@showAll']);
    $router->get(   '/{id}',    ['uses' => 'PatientsController@show']);
    $router->post(  '',         ['uses' => 'PatientsController@create']);
    $router->delete('/{id}',    ['uses' => 'PatientsController@delete']);
    $router->put(   '/{id}',    ['uses' => 'PatientsController@update']);
    $router->post(   '/book/{id}',    ['uses' => 'PatientsController@book']);
});
