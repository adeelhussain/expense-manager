/**
 * Created by AdeelHussain on 6/15/2016.
 */
import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  //TODO: Category related to a user Or not
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }

});

export default mongoose.model('Category', CategorySchema);
