import mongoose from "mongoose"
import { app } from "../../server.js";
const env = process.env;
const MONGO_URL = env.MONGO_URL
const PORT = env.PORT
export const ConnectDB = async ()=>{
    return await mongoose.connect(MONGO_URL);
}

ConnectDB().then((obj)=>{
    console.log(`DB Successfully Connected to HOST : ${obj.connection.host} 🔥🔥`)
    app.listen(PORT, ()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    })
}).catch((err)=>{
    console.log("Erorr while connection to DB", err.message)
});