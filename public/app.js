
import {employees} from './employee.js';

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
  $scope.call = function(name){
     alert('My name is '+name);
  }
  console.log("employees",employees);
  //this.firstName = "Karthik";
  $scope.employeeLists=employees;
});
app.filter('decorate',function() {

  function decorateFilter(input,option) {
    return option + input + option;
  }
  //decorateFilter.$stateful = true;

  return decorateFilter;
});
app.directive('employee', function() {
  return {
    restrict: 'E',
    scope: {
      employee: '=emp',
      call:'&'
    },
    templateUrl: 'employee.html',
    compile: function compile( tElement, tAttributes, transcludeFn ) {
    console.log("compile element",tElement);
    tElement.css('padding', '6px');
    return {post:
        function ($scope, element, attrs) {
            console.log("link element",element,$scope);
            element.bind('click', function () {
                element.html('You clicked the employee: '
                    + $scope.employee.name);
            });
            element.bind('mouseenter', function () {
                //element.css('color', 'yellow');
                element.css('background-color', 'blue');
            });
            element.bind('mouseleave', function () {
                //element.css('color', 'white');
                element.css('background-color', 'black');
            });
            }
        }
        }
  };
});
