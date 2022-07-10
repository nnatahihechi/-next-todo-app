import { NextApiRequest, NextApiResponse } from "next"
import connectDb from '../../../utils/connectDb'
import Todo from "../../../models/todos";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query: { id } } = req;

  await connectDb();

  if (method === "GET") {
    try {
      const todo = await Todo.findById(id);
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'DELETE') {
    await Todo.deleteOne({ todoId: id });
  }

  // if (method === 'PUT') {
  //   await Todo.updateOne({ todoId: id }, { $set: { isComplete: req.body.isComplete } });
  // }


  if (method === 'PUT') {
    const payload = {
      title: req.body.title,
      description: req.body.description,
      todoId: req.body.todoId,
      isComplete: req.body.isComplete
    }
    
    console.log("playload...", payload);
    await Todo.updateOne({ todoId: id }, { $set: { ...payload } })
      .then(response => res.status(200).json(response))
      .catch(err => console.error("err", err));
  }



  
};


export default handler;
