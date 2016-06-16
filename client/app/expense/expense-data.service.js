/**
 * Created by AdeelHussain on 6/15/2016.
 */
{
  class expenseDataService {

    constructor($http) {
      this.basePath = '/api/expense/';
      this.categoryBasePath = '/api/category/';
      this.$http = $http;

    }

  ;


    /**
     * Get all expenses
     * @param criteria
     * @returns {*}
     */
     getAllExpenses(criteria) {
      //TODO: Parse filter
      return this.$http.get(this.basePath);
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
      return this.$http.post(this.basePath, expenseData);
    }

    /**
     * Update expense entry
     * @param expenseData
     * @returns {*}
     */
    updateExpenseEntry(expenseData) {
      return this.$http.put(this.basePath + expenseData._id, expenseData);
    }

    //TODO: Move this to category service

    /**
     * Load category by keyword
     * @param keyword
     * @returns {*}
     */
    findCategory(keyword) {
      return this.$http.get(this.categoryBasePath + 'find-by-name/?keyword=' + keyword);
    }

    /**
     * Add new category
     * @param categoryData
     * @returns {*}
     */
    addCategory(categoryData) {
      return this.$http.post(this.categoryBasePath, [categoryData]);
    }

    /**
     * Add categories
     * @param categoriesData
     * @returns {*}
     */
    addCategories(categoriesData) {
      return this.$http.post(this.categoryBasePath, categoriesData);
    }

  }

  angular
    .module('expenseManagerApp')
    .service('expenseDataService', expenseDataService);


}
