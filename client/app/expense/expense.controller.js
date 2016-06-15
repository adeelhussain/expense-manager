'use strict';

{
  class ExpenseController {

    constructor(expenseDataService, expenseService) {
      'ngInject';
      this.expenseDataService = expenseDataService;
      this.expenseService = expenseService;

      this.addingNew = false;

      //Default data of a entry
      this.newEntry = {
        name: '',
        amount: null,
        categories: []
      };
      this.entries = [];

      /*$http.get('/api/things').then(response => {
       this.awesomeThings = response.data;
       });*/
      this.expenseDataService.getAllExpenses()
        .then(expenses => {
          this.entries = expenses.data;
        },
          err => {

          //TODO: Show Errors
          console.log(err)
        }
      )
    }

    /**
     * Add new entry
     * @param isValid
     * @param newEntry
     */
    addEntry(isValid, newEntry) {
      if (!isValid) return;
      console.log(newEntry)
      ///TODO: validate expense data
      this.expenseService.addExpenseEntry(newEntry)
        .then(resp => {
          console.log(newEntry)

          newEntry._id = resp.data._id;
          this.entries.unshift(newEntry);
          //TODO: Show success
          alert('Added Successfully');
          console.log(resp)
        },
          err => {

          //TODO: Show Errors
          console.log(err)
        }
      )
    }

    /**
     * toggle add new entry form
     */
    toggleAddEntry() {
      this.addingNew = !this.addingNew;
    }

    /**
     * update entry data
     * @param itemIndex
     * @param entryData
     */
    updateEntry(itemIndex, entryData) {
      //TODO: Process Data
      this.expenseDataService.updateEntry(entryData)
        .then(expense => {
          this.entries[itemIndex] = expense.data;
        },
          err => {

          //TODO: Show Errors
          console.log(err)
        }
      )
    }

    /**
     * Load categories for expense
     * @param keyword
     * @returns {*}
     */
    loadCategories(keyword) {
      return this.expenseDataService.findCategory(keyword);
      /*.then(categories => {

       //this.entries[itemIndex] = expense.data;
       },
       err => {

       //TODO: Show Errors
       console.log(err)
       }
       )*/
    }

  }

  angular.module('expenseManagerApp')
    .controller('ExpenseController', ExpenseController);
}
