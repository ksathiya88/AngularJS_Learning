export let homeControllerName = 'homeController';

export const homeController = function(httpService,$state) {
   this.$state = $state;

   this.logout = function(){
   	  this.$state.go("login");
   }
};