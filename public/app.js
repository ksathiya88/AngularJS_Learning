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
  decorateFilterName,
  decorateFunction
} from './decorate.filter.js';
import {
  mainControllerName,controller
} from './controller.js';

var app = angular.module('myApp', ["ui.router"]);
app.config(function($stateProvider) {
  var listEmployees = {
    name: 'listEmployees',
    url: '/listEmployees',
    component: listEmployeeComponentName
  };

  var addEmployees = { 
    name: 'addEmployees',
    url: '/addEmployees',
    component: addDirectiveName
  };

  $stateProvider.state(listEmployees);
  $stateProvider.state(addEmployees);

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