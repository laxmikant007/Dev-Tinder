require("dotenv").config();
const express  = require("express");
const cors  = require("cors");
const morgan  = require("morgan");
const env = process.env;

const app = express();
const PORT  = env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(morgan("dev"));

app.use("/api", (req, res)=>{
    res.status(200).send({status : 1 , message : `Api Router Working Fine!!`});
});

app.use("/", (req, res)=>{
    res.status(200).send({status : 1 , message : `Server is Running on PORT : ${PORT}`});
})


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})


