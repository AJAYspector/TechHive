const  usermodel = require('../models/usermodel');

const userdata = async (req,res) =>{
    const {username,name,password} = req.body;
    try {
        const model = await usermodel.create({username,name,password});
        res.status(200).json(model);
    }
    catch {
        res.status(400).json("model error");
    }
}

const Getusers = async (req,res) =>{
    try{
        const model = await usermodel.find({});
        res.status(200).json(model);
    }
    catch{
        res.status(400).json({error:"dataerror"});
    }
}

const loginuser = async(req,res) =>{
    
    // const {username} = req.body.username;
    // const {password} = req.body.password;
    
    try{
        const model = await usermodel.findOne(req.body)
        console.log(model)
        res.status(200).json(model)
    }
    catch{
        res.status(400).json({error:"no login"})
    }
}
module.exports = {userdata,Getusers,loginuser}