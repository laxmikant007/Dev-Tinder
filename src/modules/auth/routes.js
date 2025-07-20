import express from "express";
import userController from "./controller.js";

const  router  = express.Router();

router.post("/createUser", userController.createUser);

export  default router;
