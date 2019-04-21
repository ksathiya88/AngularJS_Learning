export let mainControllerName = 'myCtrl';

export const controller = function($scope, httpService) {
  $scope.firstName = "Karthik";
  $scope.lastName = "Doe";

  $scope.getEmployees = function() {
    httpService.getEmployees().then(function(response) {
      //console.log("getEmployees response", response.data);
      $scope.employeeList = response.data;
    }, function() {});
  };

  $scope.getEmployees();
};