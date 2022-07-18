
import { NextApiRequest, NextApiResponse } from "next"
import connectDb from '../../../utils/connectDb'
import Todo from "../../../models/todos";
import { useRouter } from "next/router";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
 
  const { method } = req;

  await connectDb();
  
  if (method === "POST") {
    const todo = new Todo(req.body);
    
    try {
      const todos = await todo.save();
      res.status(201).json(todos);
    } catch (err) {
      res.status(500).json(err);
    }
  }

}

export default handler;
