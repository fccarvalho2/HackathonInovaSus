<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [DashboardController::class, 'dashboard']);
Route::get('/vm', [DashboardController::class, 'vm']);
Route::get('/febreamarela', [DashboardController::class, 'febreamaerela']);
Route::get('/dengue', [DashboardController::class, 'dengue']);
Route::get('/zika', [DashboardController::class, 'zika']);
Route::get('/hiv', [DashboardController::class, 'hiv']);

Route::get('/video_institucional', fn()=>redirect('https://www.canva.com/design/DAFD9QOzquQ/VjPKdo-x6W__UfFbb2ZzEg/watch?utm_content=DAFD9QOzquQ&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel')); 
