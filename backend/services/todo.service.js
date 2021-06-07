const db = require("../config/db.config");

exports.todoService_get_info = (data, callback) => {
    db.find((error, result)=>{
        if(error){
            return callback(error);
        }
        return callback(null, result);
    });
}

exports.todoService_post_info = (data, callback) => {
    db.create(
        data,
        (error, result)=>{
            if(error)
                return callback(error);
            return callback(null, result);
        }
    );
}

exports.todoService_delete_info = (data, callback) => {
    db.findOneAndRemove({_id:data.id}, (error, result)=>{
        if(error)
            return callback(error);
        return callback(null, "Data successfully deleted");
    });
}

// here {new:true} means alaways return new value when updated
exports.todoService_update_info = (data, callback) => {
    db.findOneAndUpdate(
        {_id:data.id},
        data.updates,
        {new: true},
        (error, result)=>{
            if(error)
                return callback(error);
            return callback(null, result);
        }
    )
}