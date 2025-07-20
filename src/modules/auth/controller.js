import model from "../../models/model.js";

async function createUser(req, res){
     try {
       let  data   = req.body;
       
       let  user  = await model.userModel.create(data);

       return res.success("User Created Successfully", user); 
 
     } catch (error) {
        console.log("Error in creating  user", error.message);
        res.failed(error.message)
     }
}

export default {
    createUser
}