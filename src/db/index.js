import mongoose from "mongoose";
import "dotenv/config";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // const connectionInstance = await mongoose.connect("mongodb+srv://aticcmahbub:32142109AR@cluster0.ms3r4qf.mongodb.net/deliver_matrix_db")
        console.log(connectionInstance.connection.host)
    } catch (error) {
        console.log("Mongodb connection error",  error)
        process.exit(1)
    }
}

export default connectDB