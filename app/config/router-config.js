'use strict';

module.exports = [
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlServiceProvider) {
    $urlServiceProvider.when('', '/join#login');
    $urlServiceProvider.when('/', '/join#login');
    $urlServiceProvider.when('/signup', '/join#signup');
    $urlServiceProvider.when('/login', '/join#login');
    let routes = [
      {
        name: 'home',
        url: '/home',
        template: require('../view/home/home.html'),
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
      },
      {
        name: 'landing',
        url: '/join',
        template: require('../view/landing/landing.html'),
        controller: 'LandingController',
        controllerAs: 'landingCtrl',
      },

    ];

    routes.forEach(route => $stateProvider.state(route));
  }];
