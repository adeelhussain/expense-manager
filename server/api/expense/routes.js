/**
 * Created by AdeelHussain on 6/15/2016.
 */
'use strict';

import * as auth from '../../auth/auth.service';
import express from 'express';
import * as expenseController from './expense.controller';

var router = express.Router();

router.get('/', auth.isAuthenticated(), expenseController.getUserExpenses);
router.get('/:id', auth.isAuthenticated(), expenseController.getUserExpenseEntry);
router.post('/', auth.isAuthenticated(), expenseController.create);
router.put('/:id', auth.isAuthenticated(), expenseController.update);

module.exports = router;
