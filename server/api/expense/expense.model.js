/**
 * Created by AdeelHussain on 6/15/2016.
 */
import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let ExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  categories: [{
    type: Schema.ObjectId,
    ref: 'Category'
  }],
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }

});

export default mongoose.model('Expense', ExpenseSchema);
