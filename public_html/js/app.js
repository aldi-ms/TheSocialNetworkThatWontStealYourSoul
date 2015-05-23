$(document).ready(
    (function () {
    var app = angular.module('soulNetwork', []);
    //console.log('testing');
    
    app.controller("testController", function($scope, $http) {
    
        $scope.init = function() {
        
        };
    
        $scope.title = 'The Soul Network';
    });
}()));