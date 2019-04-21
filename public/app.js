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
  controllerName,
  employeeController
} from './employee/employee.controller.js';
import {
  decorateFilterName,
  decorateFunction
} from './decorate.filter.js';
import {
  mainControllerName,controller
} from './controller.js';

var app = angular.module('myApp', []);
app.controller(mainControllerName, controller);
app.filter(decorateFilterName, decorateFunction);
app.service(serviceName, httpService);
app.controller(controllerName, employeeController);
app.directive(directiveName,employeeDirective);
