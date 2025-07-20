import express from "express";
const  router  = express.Router();
import authRouter from "../../modules/auth/routes.js" 

router.use("/auth", authRouter);


export default router;

