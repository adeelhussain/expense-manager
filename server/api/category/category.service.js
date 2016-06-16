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
  let categories = _validateCategoryData(categoryData);

  let processedData = _processCategoryData(userId, categories);
    console.log
  Category.create(processedData, function (err, category) {
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
 * @param cb
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

/**
 * Validate category data
 * @param categoryData
 * @returns {*}
 * @private
 */
function _validateCategoryData(categoryData) {
  //TODO: Validate category data
  return categoryData;
}

/**
 * Process categories data
 * @param userId
 * @param categoryData
 * @returns {*}
 * @private
 */
function _processCategoryData(userId, categoryData) {
  if (!categoryData) return [];

  categoryData = categoryData.map(function (category) {
    category.user = userId;

    return category;
  })

  return categoryData;
}

let contactService = {
  create,
  findByKeyword,
  getUserCategory,
  listUserCategories

};

export default contactService;
