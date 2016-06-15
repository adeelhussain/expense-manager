(function(angular, undefined) {
'use strict';

angular.module('expenseManagerApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);