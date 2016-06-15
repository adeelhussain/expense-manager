/**
 * Created by AdeelHussain on 6/15/2016.
 */

import Expense from './expense.model';


/**
 * Create a new expense
 * @param expenseData
 * @param userId
 * @param cb
 */
function create(expenseData, userId, cb) {
  let processedExpenseData = _extractRequiredExpenseData(expenseData);

  //TODO: Add validations
  let validatedExpenseData = _validateExpenseEntryData(processedExpenseData);

  validatedExpenseData.user = userId;

  Expense.create(validatedExpenseData, function (err, expenseEntry) {
    if (err) {
      cb(err, null);
    }

    cb(null, expenseEntry);
  });

}


/**
 * List single expense of a user
 * @param userId
 * @param expenseId
 * @param cb
 */
function getUserExpenseEntry(userId, expenseId, cb) {

  Expense.findOne({user: userId, _id: expenseId})
    .populate({
      path: 'categories',
      select: 'name'
    })
    .exec(function (err, expenseEntry) {
      if (err) {
        cb(err, null);
      }
      cb(null, expenseEntry);
    }
  );
}


/**
 * List all expenses of a user
 * @param userId
 * @param cb
 */
function listUserExpenses(userId, cb) {
  Expense.find({user: userId})
    .populate('categories')
    .exec(function (err, expenseEntries) {

      if (err) {
        cb(err, null);
      }
      cb(null, expenseEntries);
    }
  );
}


function update(expenseData, userId, cb) {
  //TODO: Add validations, like it should be array not any other thing
  let categories = expenseData.categories;
  delete expenseData.categories;

  expenseData.user = userId;

  Expense.update(
    {_id: expenseData._id},
    {
      $set: expenseData,
      $addToSet: {
        categories: {
          $each: expenseData.categories
        }
      }
    }, function (err, expenseEntry) {
      if (err) {
        return cb(err, null);
      }
      cb(expenseEntry);
    }
  )
}

/**
 * Validate expense data
 * @param expenseData
 * @returns {*}
 * @private
 */
function _validateExpenseEntryData(expenseData) {

  //TODO: Validate expense data
  return expenseData;
}

/**
 * Extract required fields for creating new category
 * @param expenseData
 * @returns {{name: *, categories: (*|Array)}}
 * @private
 */
function _extractRequiredExpenseData(expenseData) {
  let requiredExpenseData = {
    name: expenseData.name,
    amount: expenseData.amount,
    //TODO: Handle if required the non-existing category Id
    categories: expenseData.categories
  };

  return requiredExpenseData;
}

let ExpenseService = {
  create,
  getUserExpenseEntry,
  listUserExpenses,
  update
};

export default ExpenseService;
