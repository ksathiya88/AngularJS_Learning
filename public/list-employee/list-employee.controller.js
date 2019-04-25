export let listEmployeeControllerName = 'listEmployeeController';

export const listController = function($scope, httpService) {

  $scope.getEmployees = function() {
    httpService.getEmployees().then(function(response) {
      //console.log("getEmployees response", response.data);
      $scope.employeeList = response.data;
    }, function() {});
  };

  $scope.getEmployees();
};