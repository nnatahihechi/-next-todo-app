
import mongoose, { Model } from "mongoose"

// CONNECTING TO MONGOOSE
const { NEXT_PUBLIC_USER_NAME, NEXT_PUBLIC_PASSWORD, NEXT_PUBLIC_CLUSTER, NEXT_PUBLIC_DBNAME } = process.env
const DATABASE_URL =`mongodb+srv://${NEXT_PUBLIC_USER_NAME}:${NEXT_PUBLIC_PASSWORD}@${NEXT_PUBLIC_CLUSTER}.pcfeg1y.mongodb.net/${NEXT_PUBLIC_DBNAME}?retryWrites=true&w=majority`;

// connection function
const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    // .then(() => console.log("Mongoose Connection Established"))
    .catch(err => console.log(err))

  return { conn }
}

export default connect;