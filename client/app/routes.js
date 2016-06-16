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
          views: {
            'container@': {
              templateUrl: 'app/account/login/login.html',
              controller: 'LoginController',
              controllerAs: 'Login'
            }
          }

        })
        .state('signup', {
          url: '/signup',
          views: {
            'container@': {
              templateUrl: 'app/account/signup/signup.html',
              controller: 'SignupController',
              controllerAs: 'Signup'
            }
          }
        })
        .state('home', {
          views: {
            'nav@': {
              templateUrl: 'components/navbar/navbar.html',
              controller: 'NavbarController',
              controllerAs: 'nav'
            }
          },
          authenticate: true
        })

        .state('home.expense', {
          url: '/expense-manager',
          views: {
            'container@': {
              templateUrl: 'app/expense/expense.html',
              controller: 'ExpenseController',
              controllerAs: 'Expense'
            }
          }
        })

        .state('home.stats', {
          url: '/statistics',
          views: {
            'container@': {
              templateUrl: 'app/stats/statistics.html',
              controller: 'StatsController',
              controllerAs: 'Stats'
            }
          }
        });

    });
}
