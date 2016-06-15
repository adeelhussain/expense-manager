/**
 * Created by AdeelHussain on 6/15/2016.
 */
'use strict';

import * as auth from '../../auth/auth.service';
import express from 'express';
//var express = require('express');
import * as categoryController from './category.controller';

var router = express.Router();

router.get('/', auth.isAuthenticated(), categoryController.getUserCategories);
router.get('/:id', auth.isAuthenticated(), categoryController.getUserCategory);
router.post('/', auth.isAuthenticated(), categoryController.create);
/*router.post('/', categoryController.create);
 router.put('/:id', categoryController.update);
 router.patch('/:id', categoryController.update);
 router.delete('/:id', categoryController.destroy);*/

module.exports = router;
