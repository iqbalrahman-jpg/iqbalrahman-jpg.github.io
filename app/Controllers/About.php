<?php

namespace App\Controllers;

class About extends BaseController
{
    public function index(): string
    {
        return view('parts/header') 
            . view('about')
            . view('parts/footer');
    }
}
