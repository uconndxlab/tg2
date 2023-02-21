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

$app->get('/', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'home.html');
})->setName('home');

// dashboard route
$app->get('/{part}', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'home.html', ['part' => $args['part']]);
})->setName('dashboard');


$app->get('/parts/dashboard', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'parts/dashboard.html');
})->setName('parts/dashboard');

$app->get('/parts/profile', function ($request, $response, $args) {
    $view = Twig::fromRequest($request);
    return $view->render($response, 'parts/profile.html');
})->setName('parts/profile');


$app->run();