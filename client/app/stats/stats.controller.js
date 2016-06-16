'use strict';

{
  class StatsController {

    constructor(expenseDataService, expenseService) {
      this.expenseDataService = expenseDataService;
      this.expenseService = expenseService;
      /*"tag"
      1
    :
      "asdsa"
      2
    :
      "google"
      3
    :
      "Food"*/
      //this.labels = ['a', 'as', 'asdsa'];
      //this.data = [1, 10, 100];
      this.initRecords()
    }

    initRecords (){
      this.expenseService.generateExpenseReportForCategories()
      .then(
        (data) => {
          console.log(data);
          this.labels = data.labels;
          this.data = data.values;

        },
        (err) => {
          console.log(err);
          this.toastr.error(((err && err.data ) || 'Error in getting stats'), 'Error');

        }
      )
    }


  }

  angular.module('expenseManagerApp')
    .controller('StatsController', StatsController);
}
