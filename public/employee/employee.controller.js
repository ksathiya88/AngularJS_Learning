export const controllerName = "employeeController";

export function employeeController($scope, httpService) {
	this.deleteEmployee = function(key) {
		httpService.deleteEmployee(key).then(
			(request) => {
				this.getEmployees();
			},
			function(request) {});
	};
};