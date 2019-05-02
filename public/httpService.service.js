export const serviceName = "httpService";


export let httpService = function($http) {
	this.deleteEmployee = function(key) {
		//console.log("deleteEmployee",key);
		return $http.delete("deleteEmployee", {
			params:{"key": key}
		})
	};

	this.getEmployees = function() {
        //console.log("getEmployees"); 
        return $http.get("getEmployees"); 
    };

    this.authenticate = function(username,password){
    	var data = {"username":username,"password":password};
    	return $http.put('/authenticate', JSON.stringify(data));
    }
};