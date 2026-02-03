import mongoose from "mongoose";
import { env } from "./env.js";
const connectToDB = async () => {
    try {
        await mongoose.connect(env.MONGO_URI);
        console.log("successfully connected to DB")
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

export default connectToDB