app.controller("navController", function ($scope, $location, userData) {
    $scope.userName = sessionStorage['userName'];
    userData.loggedIn = true;
});