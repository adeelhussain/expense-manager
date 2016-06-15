/**
 * Created by AdeelHussain on 6/15/2016.
 */
{
  class expenseService {

    constructor(expenseDataService) {
      'ngInject';

      this.expenseDataService = expenseDataService;
    }


    /**
     * Get all expenses
     * @returns {*}
     */
    getAllExpenses() {
      return this.expenseDataService;
    }

    /**
     * Get a single expense by Id
     * @param expenseId
     * @returns {*}
     */
    getExpense(expenseId) {
      return this.$http.get(this.basePath + expenseId);
    }


    /**
     * Add new entry
     * @param expenseData
     */
    addExpenseEntry(expenseData) {
      //TODO: Move this to individual function
      //TODO: Validate data

      expenseData.categories = expenseData.categories.map((category) => {
        return category._id;
      });

      return this.expenseDataService.addExpenseEntry(expenseData)
        .then(resp => {
          return resp;
        },
          err => {
          //TODO: Show Errors
          return err
        })

    }

    /**
     * Update expense entry
     * @param expenseData
     * @returns {*}
     */
    updateExpenseEntry(expenseData) {
      return this.$http.put(this.basePath + expenseData._id, expenseData);
    }


  }

  angular
    .module('expenseManagerApp')
    .service('expenseService', expenseService);


}
