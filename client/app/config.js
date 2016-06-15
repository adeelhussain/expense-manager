/**
 * Created by AdeelHussain on 6/15/2016.
 */
{
  'use strict';

  angular.module('expenseManagerApp')
    .run(function ($rootScope) {

      //TODO: Dont allow user to acces secure pages
      $rootScope.$on('$stateChangeStart', function (event, next, nextParams, current) {
        if (next.name === 'logout' && current && current.name && !current.authenticate) {
          next.referrer = current.name;
        }
      });
    });

}
