'use strict';

angular.module('expenseManagerApp.auth', [
  'expenseManagerApp.constants',
  'expenseManagerApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
