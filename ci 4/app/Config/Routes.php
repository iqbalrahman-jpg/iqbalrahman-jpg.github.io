<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/About', 'About::index');
$routes->get('/Projects', 'Projects::index');
$routes->get('/Service', 'Projects::service');
