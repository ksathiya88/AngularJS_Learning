//import * as angular from "angular";
import {
  serviceName,
  httpService
} from './httpService.service.js';
import {
  directiveName,
  employeeDirective
} from './employee/employee.directive.js';

import {
  listEmployeeComponentName,
  listEmployeeComponent
} from './list-employee/list-employee.directive.js';

import {
  addDirectiveName,
  addEmployeeDirective
} from './add-employee/add-employee.directive.js';
import {
  controllerName,
  employeeController
} from './employee/employee.controller.js';
import {
  addControllerName,
  addEmployeeController
} from './add-employee/add-employee.controller.js';
import {
  listEmployeeControllerName,
  listController
} from './list-employee/list-employee.controller.js';

import {
loginControllerName,
loginController
} from './login/login.controller.js';

import {
loginComponentName,
loginComponent
} from './login/login.component.js';

import {
homeControllerName,
homeController
} from './home/home.controller.js';

import {
homeComponentName,
homeComponent
} from './home/home.component.js';

import {
  decorateFilterName,
  decorateFunction
} from './decorate.filter.js';
import {
  mainControllerName,controller
} from './controller.js';

var app = angular.module('myApp', ["ui.router"]);
app.config(function($stateProvider) {
  var home = { 
    //abstract:true,
    name:"home",
    url: '/home',
    templateUrl: './home/home.html',
    controller:homeControllerName
  };

  var listEmployees = {
    name:"listEmployees",
    url: '/listEmployees',
    component: listEmployeeComponentName
  };

  var addEmployees = { 
    name: 'addEmployees',
    url: '/addEmployees',
    component: addDirectiveName
  };

  var login = { 
    name: 'login',
    url: '/login',
    component: loginComponentName
  };

  

  $stateProvider.state(login);
  $stateProvider.state('home',home);
  $stateProvider.state("home.listEmployees",listEmployees);
  $stateProvider.state("home.addEmployees",addEmployees);

});
app.controller(mainControllerName, controller);
app.filter(decorateFilterName, decorateFunction);
app.service(serviceName, httpService);
app.controller(controllerName, employeeController);
app.component(directiveName,employeeDirective);
app.controller(addControllerName, addEmployeeController);
app.component(addDirectiveName,addEmployeeDirective);
app.controller(listEmployeeControllerName, listController);
app.component(listEmployeeComponentName,listEmployeeComponent);
app.controller(loginControllerName, loginController);
app.component(loginComponentName,loginComponent);
app.controller(homeControllerName, homeController);
app.component(homeComponentName,homeComponent);