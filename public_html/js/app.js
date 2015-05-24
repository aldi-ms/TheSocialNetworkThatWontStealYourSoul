"use strict";

var app = angular.module('soulNetwork', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'html/start.html',
        controller: 'mainController',
        resolve: {
            check: function($location) {
                if (sessionStorage['token'] == null) {
                    $location.path('start');
                } else {
                    $location.path('index');
                }
            }
        }
    })
    .when('/start', {
        templateUrl: 'html/start.html',
        controller: 'mainController'
    })
    .when('/index', {
        templateUrl: 'html/nav.html',
        controller: 'navController'
    })
    .when('/login', {
        templateUrl: 'html/login.html',
        controller: 'loginController'
    })
    .when('/register', {
        templateUrl: 'html/register.html',
        controller: 'registerController'
    });
}); 