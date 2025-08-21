//Define AngularJS App
var app = angular.module('studentApp', []);
//Define Controller
app.controller('studentController', function($scope) {
    $scope.student = { 
        name: 'John Doe', 
        roll: '101',
        course: 'Computer Science', 
    };
});