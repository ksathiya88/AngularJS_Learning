export const controllerName = "employeeController";

export function employeeController($scope, httpService) {
	$scope.deleteEmployee = function(key) {
		httpService.deleteEmployee(key).then(
			function(request) {
				$scope.getEmployees();
			},
			function(request) {});
	};
};