export const addControllerName = "addEmployeeController";

export function addEmployeeController($http) {

	this.add = function() {

		var data = {
			name: this.name,
			date_of_birth: this.date_of_birth,
			position_held: this.position_held
		};
		console.log("addEmployee", JSON.stringify(data));
		$http.put('/addEmployee', JSON.stringify(data)).then(
			function(response) {
				alert(response.data);
				console.log(response);
			},
			function() {}
		);
	}
};