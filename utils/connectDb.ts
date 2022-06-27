
import mongoose, { Model } from "mongoose"

// CONNECTING TO MONGOOSE
const { USER_NAME, PASSWORD, CLUSTER, DBNAME } = process.env
const DATABASE_URL =`mongodb+srv://${USER_NAME}:${PASSWORD}@${CLUSTER}.pcfeg1y.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

// connection function
const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    // .then(() => console.log("Mongoose Connection Established"))
    .catch(err => console.log(err))

  return { conn }
}

export default connect;