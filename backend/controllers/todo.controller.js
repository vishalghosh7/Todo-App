const todoService = require("../services/todo.service");

const errData = {data: "something wrong with the request"};

exports.todoController_get_info = (req, res) =>{
    const data = {};

    todoService.todoService_get_info(data, (error, result)=>{
        if(error)
            return res.status(401).send(errData);
        return res.status(200).send(result);
    });
}

exports.todoController_post_info = (req, res) => {
    const data = {
        title: req.body.title,
        complete: req.body.complete
    }

    todoService.todoService_post_info(data, (error, result)=>{
        if(error)
            return res.status(401).send(errData);
        return res.status(200).send(result);
    });
}

exports.todoController_delete_info = (req, res)=>{
    const data = {id: req.params.id}
    todoService.todoService_delete_info(data, (error, result)=>{
        if(error)
            return res.status(401).send(errData);
        return res.status(200).send({data: result});
    });
}

exports.todoController_update_info = (req, res)=>{
    const data = {
        id: req.params.id,
        updates: req.body
    }
    todoService.todoService_update_info(data, (error, result)=>{
        if(error)
            return res.status(401).send(errData);
        return res.status(200).send({data:result});
    });
}