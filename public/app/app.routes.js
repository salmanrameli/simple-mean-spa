angular.module('app.routes', ['ngRoute']).config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/pages/home.html',
        controller: 'userController',
        controllerAs: 'user'
    }).when('/create', {
        templateUrl: 'app/views/pages/create.html',
        controller: 'userCreateController',
        controllerAs: 'user'
    }).when('/:user_id', {
        templateUrl: 'app/views/pages/show.html',
        controller: 'userController',
        controllerAs: 'user'
    }).when('/:user_id/edit', {
        templateUrl: 'app/views/pages/edit.html',
        controller: 'userEditController',
        controllerAs: 'user'
    });

    $locationProvider.html5Mode(true);
});