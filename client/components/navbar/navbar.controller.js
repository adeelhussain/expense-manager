'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Expense Manager',
    'state': 'home.expense'
  },
    {
    'title': 'Statistics',
    'state': 'home.stats'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth, $state) {
    this.Auth = Auth;
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
