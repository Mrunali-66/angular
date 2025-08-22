// Create AngularJS module
var app = angular.module("studentApp", []);

// Create a custom directive
app.directive("studentCard", function () {
    return {
        restrict: "E", // E = element (use <student-card>)
        template: 
           '<div style="border:1px solid #333; padding:10px; width:250px;' +
            'margin:10px; border-radius:8px;">' +
            '<h3>{{student.name}}</h3>' +
            '<p><b>Roll No:</b> {{student.roll}}</p>' +
            '<p><b>C ourse:</b> {{student.course}}</p>' +
            '</div>',
        controller: function ($scope) {
            // Student object
            $scope.student = {
                name: "John Doe",
                roll: "101",
                course: "Computer Science",
                name: "Angela Smith",
                roll: "102",
                course: "Computer Science"
                
            };
        }
    };
});