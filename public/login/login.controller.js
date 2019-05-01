export let loginControllerName = 'loginController';

export const loginController = function($state) {
	this.username="user";
	this.password="password";
    this.$state = $state;
    this.submit = function(){
    	 console.log("submit clicked");
         this.$state.go("home");     
    };

};