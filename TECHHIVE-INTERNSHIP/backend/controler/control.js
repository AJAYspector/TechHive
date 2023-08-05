const taskmodel = require('../models/model');

const createtask = async (req,res) => {
    const {title,description} = req.body;

    try{
        const task = await taskmodel.create({title,description});
        res.status(200).json(task);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}
const gettask = async (req,res) => {
    const {id} =req.params;
    try{
        const task = await taskmodel.find({});
        res.status(200).json(task)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}
const updaten = async (req,res) => {
    const {id} =req.params;
    try{
        const task = await taskmodel.findByIdAndUpdate({_id:id},{...req.body,});
        res.status(200).json(task)
    }catch(e){
        res.status(400).json({error:e.message})

    }
}
const deletetask = async (req,res) => {
    const {id} =req.params;
    try{
        const task = await taskmodel.findByIdAndDelete({_id:id})
        res.status(200).json(task)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

module.exports = { createtask,gettask,updaten ,deletetask};