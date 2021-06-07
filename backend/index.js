const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const todoRoute = require("./routes/todo.route");

const app = express();
const port = 3030;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());

app.use("/todos", todoRoute);

app.listen(port, ()=>{
    console.log("Server started at port: "+port);
});
