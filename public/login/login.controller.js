export let loginControllerName = 'loginController';

export const loginController = function($state,httpService) {
	this.username="user";
	this.password="password";
    this.$state = $state;
    this.error=false;
    this.submit = function(){
    	 console.log("submit clicked");
         httpService.authenticate(this.username,this.password).then(
         	function(request){
         		this.error=false;
         		this.$state.go("home.listEmployees")
            }.bind(this),
         	function(error){
         		console.log("error",error);
         		this.error = true;
         	}.bind(this)
        );
    };

};