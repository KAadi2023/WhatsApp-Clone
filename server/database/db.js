import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {

    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.8wmy3sf.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log(`DataBase Connection failed`, `"${error.message}"`);
    }
}

export default Connection; 