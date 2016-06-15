/**
 * Created by AdeelHussain on 6/15/2016.
 */

import Category from './category.model';


/**
 * Create a new category
 * @param categoryData
 * @param userId
 * @param cb
 */
function create(categoryData, userId, cb) {
  let category = _validateCategoryData(categoryData);

  //TODO: Add validations
  category.user = userId;

  Category.create(category, function (err, category) {
    if (err) {
     return cb(err, null);
    }

    cb(null, category);
  });

}

/**
 * Load categoryByName
 * @param userId
 * @param keyword
 */
function findByKeyword(userId, keyword, cb) {
  var name = new RegExp(keyword, 'i');
  //TODO: Limit result
  Category.find({user: userId, name: name}, function (err, category) {
    if (err) {
      return cb(err, null);
    }

    cb(null, category);
  });

}

/**
 * List all categories of a user
 * @param userId
 * @param cb
 */
function listUserCategories(userId, cb) {
  Category.find({user: userId}, 'name', function (err, categories) {
    if (err) {
      return cb(err, null);
    }

    //TODO: Process categories here, if required!
    cb(null, categories);
  });
}


/**
 * List single category of a user
 * @param userId
 * @param categoryId
 * @param cb
 */
function getUserCategory(userId, categoryId, cb) {
  Category.findOne({user: userId, _id: categoryId}, 'name', function (err, category) {
    if (err) {
      return cb(err, null);
    }

    //TODO: Process category here, if required!
    cb(null, category);
  });
}

function _validateCategoryData(categoryData) {
  //TODO: Validate category data
  return categoryData;
}

let contactService = {
  create,
  findByKeyword,
  getUserCategory,
  listUserCategories

};

export default contactService;
