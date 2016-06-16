'use strict';

{
  class ExpenseController {

    constructor(expenseDataService, expenseService, toastr) {
      'ngInject';
      this.expenseDataService = expenseDataService;
      this.expenseService = expenseService;
      this.toastr = toastr;
      //TODO: Create a service for toastr customization


      this.addingNew = false;
      this.isRequestInProgress = false;

      //Default data of a entry
      this.emptyForm();
      this.entries = [];

      this.expenseDataService.getAllExpenses()
        .then(expenses => {
          this.entries = expenses.data;
        },
          err => {
          this.toastr.error(((err && err.data ) || 'Error in getting entries'), 'Error');
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
      if (!isValid || this.isRequestInProgress) return;

      this.isRequestInProgress = true;

      //TODO: validate expense data
      this.expenseService.addExpenseEntry(newEntry)
        .then(resp => {
          this.isRequestInProgress = false;
          //Empty the form
          this.toggleAddEntry();

          this.entries.unshift(resp.data);

          //TODO: Show success
          this.toastr.success('Entry created successfully', 'Success');

        },
          err => {
            this.isRequestInProgress = false;
          //TODO: Show Errors
          console.log(err)
          this.toastr.error(((err && err.data ) || 'Error in adding entry'), 'Error');

        }
      )
    }

    /**
     * toggle add new entry form
     */
    toggleAddEntry() {
      this.addingNew = !this.addingNew;
      this.emptyForm();
    }


    toggleEntryForm(entry) {
      entry.isEdit = !entry.isEdit;

    }


    /**
     * update entry data
     * @param entryData
     * @param itemIndex
     */
    updateEntry(entryData, itemIndex) {
      //TODO: Process Data
      this.expenseService.updateExpenseEntry(entryData)
        .then(expense => {
          this.entries[itemIndex] = expense.data;
          this.toastr.success('Entry updated successfully', 'Success');

        },
          err => {

          this.toastr.error(((err && err.data) || 'Error in updating entry'), 'Error');
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
    }

    emptyForm() {
      this.newEntry = {
        name: '',
        amount: null,
        categories: []
      };
    }

  }

  angular.module('expenseManagerApp')
    .controller('ExpenseController', ExpenseController);
}
