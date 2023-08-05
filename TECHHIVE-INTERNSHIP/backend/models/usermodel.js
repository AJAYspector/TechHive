const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usertable = new schema(
    {
        username : {
            type : String,
            require : true,
            unique: true
        },
        name : {
            type : String,
            require : true
        },
        password : {
            type : String,
            require : true
        }
    },
    {timestamps : true}
);

module.exports = mongoose.model("User_table", usertable);