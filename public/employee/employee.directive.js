export const directiveName = "employeeDirective";

export  function employeeDirective() {
  return {
    restrict: 'E',
    scope: {
      employee: '=emp',
      getEmployees:'&'
    },
    controller: "employeeController",
    templateUrl:'./employee/employee.html',
    compile: function compile(tElement, tAttributes, transcludeFn) {
      // console.log("compile element", tElement);
      tElement.css('padding', '6px');
      return {
        post: function($scope, element, attrs) {
          //console.log("link value", deleteItem);
          // console.log("link element", element, $scope);
          //element.bind('click', function () {
          //    element.html('You clicked the employee: '
          //        + $scope.employee.name);
          //});
          element.bind('mouseenter', function() {
            element.css('color', 'yellow');
            element.css('background-color', 'blue');
          });
          element.bind('mouseleave', function() {
            element.css('color', 'black');
            element.css('background-color', 'black');
          });
        }
      }
    }
  }
}