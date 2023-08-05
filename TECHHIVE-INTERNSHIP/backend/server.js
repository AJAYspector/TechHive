const express = require('express');
const mongoose =require('mongoose');
const taskrouter = require("./router/routes");
const app=express();
const cors =require('cors')
const userrouter = require("./router/userrouter")

app.use(cors())
app.use(express.json());

app.get("/",(req,res) => {
    res.json({message: "linked"});
});

mongoose.connect('mongodb+srv://admin:admin@mernapp.9iy6fyr.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
            app.listen(4000 , () => {
                console.log("dbconnected");
            })
        }).catch(error => console.log("error connecting"));


app.use("/api",taskrouter);
app.use("/user",userrouter)
