<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(): string
    {
        return view('parts/header') 
            . view('home')
            . view('parts/footer');
    }
}
