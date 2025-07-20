import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import response from "./src/helpers/response.js";
import { ConnectDB } from "./src/DB/db.js";
const env = process.env;
import router from "./src/routes/Api/api.js"

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(morgan("dev"));
app.use(response);
app.use("/api/v1", router);

app.use("/", (req, res)=>{res.success(`Server is LIVE 🟢🟢`)});