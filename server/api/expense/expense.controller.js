/**
 * Created by AdeelHussain on 6/15/2016.
 */

import Expense from './expense.model';
import ExpenseService from './expense.service'


/**
 * Get all expenses of a user
 * @param req
 * @param res
 */
export function getUserExpenses(req, res) {

  let user = req.user;

  ExpenseService.listUserExpenses(user._id, function (err, expenses) {
    if (err) {
      res.status(500).json( err.message);
    }

    res.status(200).json( expenses);
  })

}

/**
 * Get single expense of a user
 * @param req
 * @param res
 */
export function getUserExpenseEntry(req, res) {
  let user = req.user;
  let expenseId = req.params['id'];

  ExpenseService.getUserExpenseEntry(user._id, expenseId, function (err, expenseEntry) {
    if (err) {
      res.status(500).json( err.message);
    }
    res.status(200).json( expenseEntry);
  })
}

/**
 * Create a new expense entry
 * @param req
 * @param res
 */
export function create(req, res) {
  //TODO: Added validations
  let user = req.user;

  ExpenseService.create(req.body, user._id, function (err, expenseEntry) {
    if (err) {
      return res.status(500).json( err.message);
    }
    res.status(200).json( expenseEntry);
  });
}

/**
 * Update an expense entry
 * @param req
 * @param res
 */
export function update(req, res) {
  let user = req.user;

  ExpenseService.update(req.body, user._id, function (err, expenseEntry) {
    if (err) {
      return res.status(500).json(err.message);
    }
    res.status(200).json(expenseEntry);
  })
}
