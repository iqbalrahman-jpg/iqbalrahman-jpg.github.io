<?php

namespace App\Controllers;

class Projects extends BaseController
{
    public function index(): string
    {
        return view('parts/header') 
            . view('service')
            . view('parts/footer');
    }

    public function service() : string {
        return view('parts/header') 
            . view('project')
            . view('parts/footer');
    }
}
