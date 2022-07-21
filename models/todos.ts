import mongoose from "mongoose";
import { nanoid } from "nanoid";

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },

  todoId: {
    type: String,
    default: nanoid(),
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
 isComplete: {
    type: Boolean,
    default: false,
    required: true
  },
  important: {
    type: Boolean,
    default: false,
    
  },
  createdAt: {
    type: Date,
    default: Date.now
}
});

// mongoose.models = {};

const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);

export default Todo;