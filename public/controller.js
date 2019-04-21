export let mainControllerName = 'myCtrl';

export const controller = function($scope, httpService) {
  $scope.firstName = "Karthik";
  $scope.lastName = "Doe";
  $scope.call = function(name) {
    alert('My name is ' + name);
  }

  console.log("httpService", httpService);
 


  httpService.getEmployees().then(function(response) {
     console.log("getEmployees response",response.data);
     $scope.employeeList = response.data;
  }, function() {});

  $scope.alert = function() {
    alert('My name is ' + "karthik");
    console.log("hello1111");
  }

};