const mongoose = require("mongoose");
const todoModel = require("../models/ToDoModel");
const dotenv = require("dotenv");
const connectionOptions = {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

dotenv.config();

mongoose.connect(`mongodb://${process.env.HOST}/${process.env.DATABASE}`, connectionOptions)
.then(()=>{
    console.log("Database connected successfully");
})
.catch((err)=>console.log(err));

module.exports = todoModel;



