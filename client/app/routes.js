/**
 * Created by AdeelHussain on 6/15/2016.
 */
{
  'use strict';

  angular.module('expenseManagerApp')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider
        .otherwise('/expense-manager');
      $locationProvider.html5Mode(true);

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/account/login/login.html',
          controller: 'LoginController',
          controllerAs: 'Login'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'app/account/signup/signup.html',
          controller: 'SignupController',
          controllerAs: 'vm'
        })

        /*.state('home', {
          abstract: true,
          url: '/',
          templateUrl: 'app/home/home.html',
          controller: 'HomeController',
          controllerAs: 'Home'
        })*/
        .state('expense', {
          url: '/expense-manager',
          templateUrl: 'app/expense/expense.html',
          controller: 'ExpenseController',
          controllerAs: 'Expense'
        })

        .state('stats', {
          url: '/statistics',
          templateUrl: 'app/stats/statistics.html',
          controller: 'StatsController',
          controllerAs: 'Stats'
        });

    });
}
