
import { NextApiRequest, NextApiResponse } from "next"
import connectDb from '../../../utils/connectDb'
import Todo from "../../../models/todos";
import User from '../../../models/user';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query: { userId, _id} } = req;

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

    if (method === "GET") {
        try {
            const todo = await Todo.findOne({userId});
            res.status(200).json(todo);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === 'DELETE') {
        await Todo.deleteOne({ todoId: _id });
    }

}

export default handler;
