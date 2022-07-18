import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  _type: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
}
});


const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;