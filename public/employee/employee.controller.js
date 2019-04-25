export const controllerName = "employeeController";

export function employeeController(httpService) {
	this.deleteEmployee = function(key) {
		httpService.deleteEmployee(key).then(
			function(request) {
				$scope.getEmployees();
			},
			function(request) {});
	};
};