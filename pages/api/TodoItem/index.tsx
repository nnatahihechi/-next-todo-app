import { NextApiRequest, NextApiResponse } from "next"
import connectDb from '../../../utils/connectDb'
import Todo from "../../../models/todos";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const { method } = req;

  await connectDb();

  if (method === "GET") {
    try {
      const todos = await Todo.find({});
      res.status(200).json(todos);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // if (method === 'DELETE') {
  //   const todo = new Todo(req.body)
  //   console.log(todo);
  //   console.log("req.body", req.body)
  //   // const todos = await todo.findByIdAndRemove(todo.id)
  //   const todos = await Todo.deleteOne({ todoId: todo.todoId }, function (err: any) {
  //     if (err) console.log(err);
  //     console.log("Successful deletion");
  //   });

  //   res.status(201).json(todos)

  // }
}


export default handler;
