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

}


export default handler;
