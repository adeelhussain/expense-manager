'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'home'
  },
    {
    'title': 'Statistics',
    'state': 'stats'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth, $state) {
    this.$state = $state;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;

  }

  logout(){
    this.Auth.logout();
    this.$state.go('login');
  }
}

angular.module('expenseManagerApp')
  .controller('NavbarController', NavbarController);
