/**
 * Created by AdeelHussain on 6/15/2016.
 */

import Category from './category.model';
import CategoryService from './category.service'


/**
 * Get all categories of a user
 * @param req
 * @param res
 */
export function getUserCategories(req, res) {

  let user = req.user;

  CategoryService.listUserCategories(user._id, function (err, categories) {
    if (err) {
      res.status(500).json(err.message);
    }
    res.status(200).json(categories);
  })

}

/**
 * Get single category of a user
 * @param req
 * @param res
 */
export function getUserCategory(req, res) {
  let user = req.user;
  let categoryId = req.params['id'];

  CategoryService.getUserCategory(user._id, categoryId, function (err, categories) {
    if (err) {
      res.status(500).json(err.message);
    }
    res.status(200).json(categories);
  })
}

/**
 * Create a new category
 * @param req
 * @param res
 */
export function create(req, res) {
  let user = req.user;
  let categoryData = {
    name: req.body.name
  };

  CategoryService.create(categoryData, user._id, function (err, category) {
    if (err) {
      return res.status(500).json(err.message);
    }
    res.status(200).json(category);
  })
}

export function findByKeyword(req, res) {
  let user = req.user;
  let keyword = req.query.keyword;
  CategoryService.findByKeyword(user._id, keyword, function (err, category) {

    if (err) {
      return res.status(500).json(err.message);
    }
    res.status(200).json(category);
  })

}
