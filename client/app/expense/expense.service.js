/**
 * Created by AdeelHussain on 6/15/2016.
 */
{
  class expenseService {

    constructor(expenseDataService, $q) {
      'ngInject';

      this.expenseDataService = expenseDataService;
    }

    /**
     * Add new entry
     * @param expenseData
     */
    addExpenseEntry(expenseData) {
      return this._saveEntry(expenseData, true);
    }

    /**
     * Update expense entry
     * @param expenseData
     * @returns {*}
     */
    updateExpenseEntry(expenseData) {
      return this._saveEntry(expenseData, false);
    }

    /**
     * process adding expense
     * @param expenseData
     * @param isNew
     * @returns {*}
     * @private
     */
    _processNewExpensesData(expenseData, isNew) {
      expenseData.categories = expenseData.categories.map((category) => {
        return category._id;
      });

      if(isNew){
        return this.expenseDataService.addExpenseEntry(expenseData)
      }
      else {
        return this.expenseDataService.updateExpenseEntry(expenseData);
      }
    }

    /**
     * Save entry data, either update Or add new
     * @param expenseData
     * @param isNew
     * @private
     */
    _saveEntry(expenseData, isNew) {

      //TODO: Move this to individual function
      //TODO: Validate data
      let expenseDataExtended = angular.extend({}, expenseData);
      let newCategories = [];
      let existingCategories = [];

      expenseDataExtended.categories.forEach(function (cat) {
        if (!cat._id) {

          //Extract new categories which don't have id exists
          newCategories.push(cat);
        }
        else {
          //Old categories
          existingCategories.push(cat);
        }
      });


      if (!newCategories.length) {
        //If no new category added then just save entry
        return this._processNewExpensesData(expenseDataExtended, isNew);
      }
      else {
        //If new categories added, then first add those categories and then save entry
        return this.expenseDataService.addCategories({categories: newCategories})
          .then(
          (resp) => {

            //Merge new categories to existing categories
            expenseDataExtended.categories = [].push.apply(existingCategories, resp.data);
            expenseDataExtended.categories = existingCategories;
            return this._processNewExpensesData(expenseDataExtended, isNew);

          }
        )
      }
    }


  }

  angular
    .module('expenseManagerApp')
    .service('expenseService', expenseService);


}
