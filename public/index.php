<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;
use Slim\Factory\AppFactory;


require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();



// Create Twig
$twig = Twig::create('templates', ['cache' => false]);

// Add Twig-View Middleware
$app->add(TwigMiddleware::create($app, $twig));

/**  Begin Main Routes */
$app->get('/', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'home.html');
})->setName('home');


$app->get('/{part}', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'home.html', ['part' => $args['part']]);
});

/** End Main Routes */

/** Begin Fragments */

/** Dashboard Part -- my reports */
$app->get('/parts/my-reports', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'parts/my-reports.html');
})->setName('parts/dashboard');

/** Part -- my profile */
$app->get('/parts/profile', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'parts/profile.html');
})->setName('parts/profile');

/** Part -- new report */
$app->get('/parts/new-report', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'parts/new-report.html');
})->setName('parts/new-report');


/** End Fragments */

/** Begin API Routes */



/** End API Routes */


$app->run();