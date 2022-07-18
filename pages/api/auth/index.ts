import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/user";
import connectDb from "../../../utils/connectDb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    await connectDb();

    if (method === 'POST') {
        const user = new User(req.body);
        const { _id } = req.body;
        const users = await User.findById(_id);

        if (!users) {
            try {
                const newUser = user.save();
                res.status(200).json("Login  successful");
            } catch (err) {
                res.status(500).json(err);
            }
        }
    }
}


export default handler;