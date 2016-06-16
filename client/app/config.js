/**
 * Created by AdeelHussain on 6/15/2016.
 */
{
  'use strict';

  angular.module('expenseManagerApp')
    .run(function ($rootScope, Auth, $state) {

      //TODO: Dont allow user to acces secure pages
      $rootScope.$on('$stateChangeStart', function (event, next, fromParam, prev) {

        Auth.isLoggedIn(function (isLoggedIn) {
          //TODO: Add validations
          var user = Auth.getCurrentUser();
          if (next.authenticate && !isLoggedIn) {
            event.preventDefault();
            $state.go('login');
          }

        });

      });

    })

    .config(function (toastrConfig) {

      //Toastr Config set here

      angular.extend(toastrConfig, {
        autoDismiss: true,
        maxOpened: 1
      });

    });

}
